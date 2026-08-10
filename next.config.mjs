/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: isDev ? '.next' : 'out',
};

export default nextConfig;
