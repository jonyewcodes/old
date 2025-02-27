import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn3.emoji.gg",
        port: "",
        pathname: "/emojis/**",
      },
    ],
  },
};

export default nextConfig;
