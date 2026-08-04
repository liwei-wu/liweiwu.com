import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  agentRules: false,
  allowedDevOrigins: ["10.20.30.212"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
