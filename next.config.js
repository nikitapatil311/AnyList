/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    forceSwcTransforms: true,
  },

  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "m.media-amazon.com",
      "www.refrigeratedfrozenfood.com",
      "res.cloudinary.com",
      "images.unsplash.com",
      "plus.unsplash.com",
      "media.istockphoto.com",
      "images.pexels.com",
      "www.bigbasket.com",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
