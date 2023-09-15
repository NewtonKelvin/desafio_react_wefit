/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wefit-react-web-test.s3.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
