import type { NextConfig } from "next";

const isPagesBuild = process.env.PAGES_BUILD === "true";

const nextConfig: NextConfig = {
  output: isPagesBuild ? "export" : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
