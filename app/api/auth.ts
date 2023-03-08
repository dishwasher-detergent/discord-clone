import { Server } from "#/utils/config";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    // You could get email and password here
    const { email, password } = req.body;

    // TODO: Forward location headers
    const request = await fetch(Server.endpoint + "/account/sessions/email", {
      method: "POST",
      headers: {
        "x-appwrite-project": Server.project,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const response = await request.json();

    const newHostname =
      Server.hostname === "localhost" ? Server.hostname : "." + Server.hostname;

    const cookie = (request.headers.get("set-cookie") ?? "")
      .split("." + Server.appwrite_hostname)
      .join(newHostname);

    res.setHeader("set-cookie", cookie);
    res.status(200).json({
      ...response,
    });
  } else {
    res.status(404);
  }
}
