import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vitachoice-media.s3.amazonaws.com',
        port: '',
        pathname: '/media/**',
      },
    ],
  },
};

export default nextConfig;
