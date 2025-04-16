import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'cms-bucket.ws.126.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
