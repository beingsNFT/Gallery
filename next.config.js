/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["opensea.mypinata.cloud"],
  },
  async redirects() {
    return [
      {
        permanent:false,
        source: "/",
        destination: "/gallery",
      },
    ];
  },
};

module.exports = nextConfig;
