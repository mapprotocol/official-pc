import { Layout } from 'antd';
import Image from 'next/image';
import * as React from 'react';

import Link from '@/components/links/Link';
const { Header } = Layout;

import HeaderMobile from './Header.mobile';
import Resources from './Header.resources';
import Flags from './Header.Flags';

const links = [
  { href: '/stake', label: 'Stake 🔥' },
  { href: 'https://docs.maplabs.io/develop', label: 'Build' },
  {
    href: '/purchase',
    label: 'Get $MAP',
  },
  { href: 'https://mapscan.io/', label: 'Explorer' },
];

export default function MainHeader() {
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
        <div className='hidden lg:inline'>
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
            <Flags />
          </ul>
        </div>
        <div className='navbar-end lg:hidden'>
          <Flags />
          <HeaderMobile />
        </div>
      </div>
    </Header>
  );
}
