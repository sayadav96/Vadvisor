/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Ensures images work properly in static mode
  },
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint during production build
  },
  basePath: "", // Subdirectory where the site is hosted
  assetPrefix: "", // Ensures assets load correctly
  trailingSlash: true, // Ensures paths are correctly resolved
};

export default nextConfig;
