/** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: false
// };
const nextConfig = {
    reactStrictMode: true,
    env: {
      STAGING_ALCHEMY_KEY:
        "https://eth-sepolia.g.alchemy.com/v2/7k091tx6dYyXDSf0WO_91tvWj9mCvXZj",
    },
  }
  
module.exports = nextConfig;
