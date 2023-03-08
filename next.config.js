/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.kennethbass.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/channel/@me",
        permanent: true,
      },
      {
        source: "/channel",
        destination: "/channel/@me",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
