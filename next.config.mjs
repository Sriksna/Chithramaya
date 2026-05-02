/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Enable static export to generate HTML/CSS/JS files
  output: 'export',

  // 2. Disable image optimization since GitHub Pages doesn't support the 
  // default Next.js Image Optimization API
  images: {
    unoptimized: true,
  },

  // 3. Optional: If your site is NOT on a custom domain and is at 
  // username.github.io/repo-name, uncomment the line below:
  // basePath: '/chithramaya',
};

export default nextConfig;