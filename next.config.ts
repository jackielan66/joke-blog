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
       {
        protocol: 'https',
        hostname: 'smms.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/_next/data/:path*.json',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=86400' 
            // 缓存1小时，之后用旧数据同时重新验证
          }
        ]
      }
    ];
  }
};

export default nextConfig;
