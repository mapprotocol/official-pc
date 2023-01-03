import { Layout } from 'antd';
import Image from 'next/image';
import * as React from 'react';
import { useRouter } from 'next/router';
import TEXT from '../../i18n';

import Link from '@/components/links/Link';
const { Header } = Layout;

import Toggle from '@/components/layout/ThemeToggle';

import HeaderMobile from './Header.mobile';
import Resources from './Header.resources';
import Community from './Header.community';
import Grants from './Header.grants';
import Ecosystem from './Header.ecosystem';
// import Flags from './Header.Flags';

export default function MainHeader() {
  const { locale } = useRouter();
  // @ts-ignore
  const t = TEXT[locale];

  const links = [
    { href: 'https://mapscan.io/', label: t['explorer'] },
    { href: '/stake', label: t['stake'] },
  ];

  return (
    <Header
      className='bg-bg'
      style={{ position: 'fixed', zIndex: 1, width: '100%' }}
    >
      <div className='layout navbar flex justify-between'>
        <div className=''>
          <Link href='/' className='hover:text-gray-600'>
            <div className='mt-2'>
              <Image
                src='/images/white.png'
                width='200'
                height='20'
                alt='MapLogoWhite'
              />
            </div>
          </Link>
        </div>
        <div className='hidden font-primary lg:inline'>
          <ul className='flex items-center justify-between space-x-4 '>
            <Community />
            <Grants />
            <Ecosystem />

            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link
                  href={href}
                  className='text-xs text-white hover:text-gray-600'
                >
                  {label}
                </Link>
              </li>
            ))}

            <Resources />
            {/* <Flags /> */}
            <Toggle />
          </ul>
        </div>
        <div className='navbar-end font-primary lg:hidden'>
          {/* <Flags /> */}
          <HeaderMobile />
        </div>
      </div>
    </Header>
  );
}
