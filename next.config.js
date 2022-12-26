/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "zoro.to",
      "assets.wired.com",
      "img.zorores.com",
      "cdn.myanimelist.net",
      "images.pexels.com",
    ],
  },
};

module.exports = nextConfig;
