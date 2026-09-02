import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output keeps the production Docker image small — it copies
  // only the files actually needed to run `node server.js`.
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
