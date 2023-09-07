const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV !== "production",
    dest: "public",
    runtimeCaching,
  },
  i18n,
  images: {
    domains: [
      "images.contentstack.io",
      "cdn.notonthehighstreet.com",
      "dwgokgnbz84c3.cloudfront.net",
      "dwgokgnbz84c3.cloudfront.net",
      "m.media-amazon.com"
    ]
  }
});
