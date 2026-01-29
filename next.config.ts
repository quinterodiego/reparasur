import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/logo.png",
        // Sin `search`: se permiten query strings (ej. ?v=2) para cache-busting del logo
      },
    ],
  },
};

export default nextConfig;
