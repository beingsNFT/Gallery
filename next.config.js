/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["opensea.mypinata.cloud"],
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/Home/index.html",
      },
    ];
  },
};

module.exports = nextConfig;
