import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { ThemeProvider } from '@/components/layout/ThemeContext.jsx';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <ThemeProvider>
      <div className='black overflow-hidden bg-bg'>
        <Header />
        <div
          className='bg h-screen w-screen overflow-auto bg-cover'
          style={{ backgroundImage: 'url(/map/hero.jpg)' }}
        >
          <div className='layout'>{children}</div>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
