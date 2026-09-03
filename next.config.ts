import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // El lint corre en el build; que un warning no lo deje pasar en silencio.
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
