import * as React from 'react';
import { useRouter } from 'next/router';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.
//

import Introduction from '@/components/Introduction';
import BeforeAfter from '@/components/BeforeAfter';
import BlogPosts from '@/components/BlogPosts';
import Divider from '@/components/Divider';
import Features from '@/components/Features';
import HeroTitle from '@/components/HeroTitle';
import Layout from '@/components/layout/Layout';
import Pics from '@/components/Pics';
import Seo from '@/components/Seo';
import Trusted from '@/components/Trusted';

export default function HomePage() {
  const { locale } = useRouter();
  console.log(locale, 'locale');

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <div className=''>
        <HeroTitle />

        <Introduction />

        <Divider />
        <Features />

        <BeforeAfter />

        {/* <Pics /> */}

        <Trusted />

        <Divider />
        <BlogPosts />
      </div>
    </Layout>
  );
}
