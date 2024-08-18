
/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      // 其他页面路径
    }
  },
  basePath: '/flow-editor',
  assetPrefix: '/flow-editor/',
};

export default nextConfig;
