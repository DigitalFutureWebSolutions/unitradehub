import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,  // Enables React Strict Mode
  swcMinify: true,        // Enables SWC-based minification for faster builds
  eslint: {
    ignoreDuringBuilds: true, // Ignore eslint during build
  },
};

export default nextConfig;
