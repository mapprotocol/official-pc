import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { ThemeProvider } from '@/components/layout/ThemeContext.jsx';

import { Layout } from 'antd';
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
        <Content>
          <div
            className='bg bg-cover bg-fixed'
            style={{ backgroundImage: 'url(/map/hero.jpg)' }}
          >
            <div className='layout'>{children}</div>
            <Footer />
          </div>
        </Content>
      </Layout>
    </ThemeProvider>
  );
}
