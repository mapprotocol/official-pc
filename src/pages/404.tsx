import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import Link from '@/components/links/Link';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='Not Found' />

      <main>
        <section className=''>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <RiAlarmWarningFill
              size={60}
              className='drop-shadow-glow animate-flicker text-red-500'
            />
            <h1 className='mt-8 text-4xl text-white md:text-6xl'>
              Page Not Found
            </h1>

            <Link href='/' className='mx-auto mt-8 text-2xl text-white'>
              Go back to the homepage
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
