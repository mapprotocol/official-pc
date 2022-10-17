import { AppProps } from 'next/app';

import '@/styles/globals.css';
import '@/styles/pattern.min.css';
import '@/styles/divider.css';
import '@/styles/before-after.css';
import '@/styles/fonts.css';
import '@/styles/brand.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
