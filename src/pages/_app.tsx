import { AppProps } from 'next/app';

import '@/styles/globals.css';
import '@/styles/pattern.min.css';
import '@/styles/divider.css';
import '@/styles/before-after.css';
import '@/styles/fonts.css';
import '@/styles/brand.css';

import { ThemeProvider } from '@/components/layout/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
