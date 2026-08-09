import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Kamlaoils",
  assetPrefix: "/Kamlaoils/",
};

export default nextConfig;