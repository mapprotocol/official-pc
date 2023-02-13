import Head from 'next/head';
import { useRouter } from 'next/router';

// !STARTERCONF Change these default meta
const defaultMeta = {
  title: '100% Nakamoto Style Omnichain Layer for Web3 dApps',
  siteName:
    'Build omnichain dApps in simple steps. Let cryptocurrency, NFT, and data flow around all chains securely and seamlessly at minimum cost.',
  description:
    // 'Build omnichain dApps in simple steps. Let cryptocurrency, NFT, and data flow around all chains securely and seamlessly.',
    'MAP Protocol is the omnichain layer for Web3. 100% Nakamoto Style cross-chain communication built on Light-client & ZK technology with zero privileged roles.',
  url: 'https://maplab.io',
  type: 'website',
  robots: 'follow, index',
  image: 'https://www.maplabs.io/favicon.ico',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  // Use siteName if there is templateTitle
  // but show full title if there is none
  // !STARTERCONF Follow config for opengraph, by deploying one on https://github.com/theodorusclarence/og
  // ? Uncomment code below if you want to use default open graph
  // meta['image'] = openGraph({
  //   description: meta.description,
  //   siteName: props.templateTitle ? meta.siteName : meta.title,
  //   templateTitle: props.templateTitle,
  // });

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@MapProtocol' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />
          <meta
            name='author'
            property='article:author'
            content='Theodorus Clarence'
          />
        </>
      )}

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta
        name='msapplication-TileImage'
        content='/favicon/ms-icon-144x144.png'
      />
      <meta name='theme-color' content='#ffffff' />
    </Head>
  );
}

type Favicons = {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
};

// !STARTERCONF this is the default favicon, you can generate your own from https://www.favicon-generator.org/ then replace the whole /public/favicon folder
const favicons: Array<Favicons> = [
  {
    rel: 'apple-touch-icon',
    sizes: '57x57',
    // href: '/favicon/apple-icon-57x57.png',
    href: '/favicon.ico',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '60x60',
    // href: '/favicon/apple-icon-60x60.png',
    href: '/favicon.ico',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '72x72',
    // href: '/favicon/apple-icon-72x72.png',
    href: '/favicon.ico',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '76x76',
    // href: '/favicon/apple-icon-76x76.png',
    href: '/favicon.ico',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '114x114',
    // href: '/favicon/apple-icon-114x114.png',
    href: '/favicon.ico',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '120x120',
    // href: '/favicon/apple-icon-120x120.png',
    href: '/favicon.ico',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '144x144',
    // href: '/favicon/apple-icon-144x144.png',
    href: '/favicon.ico',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '152x152',
    // href: '/favicon/apple-icon-152x152.png',
    href: '/favicon.ico',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    // href: '/favicon/apple-icon-180x180.png',
    href: '/favicon.ico',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/favicon.ico',
    // href: '/favicon/android-icon-192x192.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon.ico',
    // href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: '/favicon.ico',
    // href: '/favicon/favicon-96x96.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon.ico',
    // href: '/favicon/favicon-16x16.png',
  },
  {
    rel: 'manifest',
    href: '/favicon/manifest.json',
  },
];
