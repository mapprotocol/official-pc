import * as React from 'react';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.
//
import BeforeAfter from '@/components/BeforeAfter';
import BlogPosts from '@/components/BlogPosts';
import Divider from '@/components/Divider';
import Features from '@/components/Features';
import HeroTitle from '@/components/HeroTitle';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Trusted from '@/components/Trusted';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <div className=''>
        <HeroTitle />
        <BeforeAfter />

        <Divider />
        <Features />

        <Divider />
        <Trusted />

        <Divider />
        <BlogPosts />
      </div>
    </Layout>
  );
}
