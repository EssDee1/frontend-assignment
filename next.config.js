/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fakestoreapi.com'], // Add the allowed domains here
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

module.exports = nextConfig;
