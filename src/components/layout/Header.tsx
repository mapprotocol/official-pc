import { Layout } from 'antd';
import Image from 'next/image';
import * as React from 'react';

import Link from '@/components/links/Link';
const { Header } = Layout;

import HeaderMobile from './Header.mobile';
import Resources from './Header.resources';

const links = [
  { href: '/stake', label: 'Stake 🔥' },
  { href: 'https://docs.maplabs.io/develop', label: 'Build' },
  {
    href: '/purchase',
    label: 'Get $MAP',
  },
];

export default function MainHeader() {
  return (
    <Header
      className='bg-bg'
      style={{ position: 'fixed', zIndex: 1, width: '100%' }}
    >
      <div className='layout navbar'>
        <div className='navbar-start '>
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
        <div className='navbar-end hidden lg:inline'>
          <ul className='flex items-center justify-between space-x-8 '>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link
                  href={href}
                  className='text-sm font-medium text-white hover:text-gray-600'
                >
                  {label}
                </Link>
              </li>
            ))}
            <Resources />
          </ul>
        </div>
        <div className='navbar-end lg:hidden'>
          <HeaderMobile />
        </div>
      </div>
    </Header>
  );
}
