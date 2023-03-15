const chalk = require("chalk");
const path = require("path");
const fs = require("fs");
const proxy = require("http-proxy");
const url = require("url");

const allowedOrigins = ["kennybass.xyz", "data.kennybass.xyz"];

const cert = path.join(process.cwd(), "certs/kennybass.xyz.pem");
const key = path.join(process.cwd(), "certs/kennybass.xyz-key.pem");

proxy
  .createServer({
    xfwd: true,
    ws: true,
    target: {
      host: "kennybass.xyz",
      port: 3001,
    },
    ssl: {
      key: fs.readFileSync(key, "utf8"),
      cert: fs.readFileSync(cert, "utf8"),
    },
  })
  .on("error", function (e) {
    console.error(chalk.red(`Request failed to proxy: ${chalk.bold(e.code)}`));
  })
  .on("proxyRes", (proxyRes, req, res) => {
    let allowedOrigin = false;
    if (req.headers.origin) {
      const originHostName = url.parse(req.headers.origin).hostname;
      if (originHostName && allowedOrigins.some((o) => o === originHostName)) {
        res.setHeader("access-control-allow-origin", req.headers.origin);
        res.setHeader("access-control-allow-credentials", "true");
        allowedOrigin = true;
      }
    }

    if (req.headers["access-control-request-method"]) {
      res.setHeader(
        "access-control-allow-methods",
        req.headers["access-control-request-method"]
      );
    }

    if (req.headers["access-control-request-headers"]) {
      res.setHeader(
        "access-control-allow-headers",
        req.headers["access-control-request-headers"]
      );
    }

    if (allowedOrigin) {
      res.setHeader("access-control-max-age", 60 * 60 * 24 * 30);
      if (req.method === "OPTIONS") {
        res.send(200);
        res.end();
      }
    }
  })
  .listen(3000);
