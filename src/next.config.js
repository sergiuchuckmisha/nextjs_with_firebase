module.exports = {
  distDir: '../.next',
  basePath: '/auth',
  // assetPrefix: '/auth',
  // async redirects() {
  //   return [
  //     {
  //       source: '/:slug2*/_next/:slug*',
  //       destination: '/:slug2*/redirect/_next/:slug*', // Matched parameters can be used in the destination
  //       permanent: true,
  //       basePath: false,
  //     },
  //     {
  //       source: '/api/:slug*',
  //       destination: '/auth/api/:slug*', // Matched parameters can be used in the destination
  //       permanent: true,
  //       basePath: false,
  //     },
  //   ]
  // },
  async rewrites() {
    return [
      // {
      //   source: '/:slug2*/_next/:slug*',
      //   destination: '/:slug2*/rewrite/_next/:slug*', // Matched parameters can be used in the destination
      //   basePath: false,
      // },
      {
        source: '/api/:slug*',
        destination: '/auth/api/:slug*', // Matched parameters can be used in the destination
        basePath: false,
      },
    ]
  },
}
