/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['fakestoreapi.com', "reqres.in"],
    formats: ['image/avif', 'image/webp'],
  }
}

module.exports = nextConfig
