/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'standalone',
  reactCompiler: true,
  images: {
    unoptimized: true, // Disable image optimization to bypass proxy issues
  },
};

export default nextConfig;
