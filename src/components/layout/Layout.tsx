import { Layout } from 'antd';
import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { ThemeProvider } from '@/components/layout/ThemeContext.jsx';
const { Content } = Layout;

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Put Header or Footer Here
  return (
    <ThemeProvider>
      <Layout>
        <Header />
        <Content className='pt-[64px]'>
          {/* <div className='bg bg-[url("/map/hero.jpg")] bg-cover bg-fixed dark:bg-[url("/map-light/background.jpg")]'> */}
          <div className=''>
            <div
              className='hidden dark:inline'
              style={{
                background:
                  'url("/map-light/background.jpg") center 0 no-repeat',
                backgroundSize: 'auto 100%',
                backgroundPosition: '0 0',
                position: 'fixed',
                zIndex: -1,
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              }}
            ></div>
            <div
              className='dark:hidden '
              style={{
                background: 'url("/map/hero.jpg") center 0 no-repeat',
                backgroundSize: 'auto 100%',
                backgroundPosition: '0 0',
                position: 'fixed',
                zIndex: -1,
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              }}
            ></div>
            <div className=''>{children}</div>
            <Footer />
          </div>
        </Content>
      </Layout>
    </ThemeProvider>
  );
}
