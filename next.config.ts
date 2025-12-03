import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Mount app under /application for Webflow Cloud
  basePath: "/application",
  assetPrefix: "/application",
  // Write build output to a custom folder (avoid locked .next)
  distDir: ".wf-next",
  // Pin Turbopack root to this project to avoid picking up other lockfiles
  experimental: {
    turbopack: {
      root: __dirname,
    },
  },
};

export default nextConfig;
