/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/post/:id(\\d{1,})",
        destination: "/cbc?id=:id", // Matched parameters can be used in the destination
      },
    ];
  },
});
