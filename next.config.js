/** @type {import('next').NextConfig} */
const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");
// const withBundleAnalyzer = require("@next/bundle-analyzer")

// module.exports = withBundleAnalyzer({});

module.exports = withCss(
  withPurgeCss({
    purgeCss: {
      safelist: () => ["bm-burger-bars"],
    },
  })
);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
