/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'content.churchofjesuschrist.org', 
      },
    ],
  },
};

module.exports = nextConfig; // (O "export default nextConfig;" si tu archivo termina en .mjs)