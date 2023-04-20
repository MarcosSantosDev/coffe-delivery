/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const StylelintPlugin = require('stylelint-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/common/sass')],
  },
  webpack: config => {
    config.plugins.push(new StylelintPlugin());
    return config;
  },
};

module.exports = nextConfig;
