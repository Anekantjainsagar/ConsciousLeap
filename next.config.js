/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "flagcdn.com",
      "encrypted-tbn0.gstatic.com",
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
