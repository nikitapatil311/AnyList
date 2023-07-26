/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "m.media-amazon.com",
      "www.refrigeratedfrozenfood.com",
      "res.cloudinary.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
