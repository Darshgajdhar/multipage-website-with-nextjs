/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
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
