import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/VitorOkada.github.io',
  assetPrefix: '/VitorOkada.github.io',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
