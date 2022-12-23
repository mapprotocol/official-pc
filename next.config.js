/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['cdn-images-1.medium.com'],
    unoptimized: true,
  },
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,

  // Uncoment to add domain whitelist
  // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },

  i18n: {
    /**
     * Provide the locales you want to support in your application
     * 提供您希望在应用程序中支持的地区
     */
    locales: ['en-US', 'zh-CN', 'ko-KR'],
    /**
     * This is the default locale you want to be used when visiting
     * 这是您在访问时希望使用的默认区域设置
     * a non-locale prefixed path e.g. `/hello`
     */
    defaultLocale: 'en-US',
  },
};
