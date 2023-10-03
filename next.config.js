/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,

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
      "www.distacart.com",
      "assets.office-discount.de",
      "www.apodiscounter.de",
      "cdn8.apopixx.de",
      "img01.ztat.net",
      "i.gifer.com",
      "media.tenor.com",
      "static.vecteezy.com",
      "static.wixstatic.com",
      "img.freepik.com",
      "e7.pngegg.com",
      "img.freepik.com",
      "img.freepik.com",
    ],
  },
};

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  // Pass the nextConfig object here
  ...nextConfig,
});

module.exports = nextConfig;
