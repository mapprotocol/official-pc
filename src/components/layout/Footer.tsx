import * as React from 'react';
import {
  FaBlog,
  FaDiscord,
  FaMedium,
  FaTelegram,
  FaTwitter,
} from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';

import UnderlineLink from '@/components/links/UnderlineLink';

const Build = [
  { href: 'https://docs.maplabs.io/', label: 'Docs' },
  { href: 'https://github.com/mapprotocol', label: 'Github' },
  {
    href: 'https://files.maplabs.io/pdf/mapprotocol_whitepaper_en.pdf',
    label: 'WhitePaper',
  },
];
const Community = [
  {
    href: 'https://forum.maplabs.io/latest',
    label: 'Forum',
  },
  {
    href: '',
    label: 'DAO',
  },
];
const Grants = [
  {
    href: 'https://forum.maplabs.io/t/map-omnichain-builder-grants-program/3980',
    label: 'Builder Grant',
  },
  {
    href: 'https://forum.maplabs.io/t/about-the-academy-category/3989',
    label: 'Research Grant',
  },
  {
    href: 'https://forum.maplabs.io/t/map-community-contributor-grants-program/3988',
    label: 'Community Grant',
  },
];
const Ecosystem = [
  {
    href: 'https://swap.hiveswap.io/#/swap',
    label: 'Hiveswap',
  },
  // {
  //   href: 'https://about.playverse.center/',
  //   label: 'Playverse',
  // },
  {
    href: '',
    label: 'Barternetwork',
  },
  {
    href: '',
    label: 'Barter Bridge (testing)',
  },
  {
    href: 'https://befiwallet.io/',
    label: 'BeFi Wallet',
  },
];
const Social = [
  {
    href: 'https://medium.com/@mapprotocolofficial/',
    label: 'Medium',
    icon: FaMedium,
  },
  {
    href: 'https://mobile.twitter.com/MapProtocol/',
    label: 'Twitter',
    icon: FaTwitter,
  },
  { href: 'https://t.me/MAPprotocol/', label: 'Telegram', icon: FaTelegram },
  {
    href: 'https://open.kakao.com/o/gP9WduRb/',
    label: 'KakaoTalk',
    icon: RiKakaoTalkFill,
  },
  { href: 'https://discord.gg/MtYjv9jh4u/', label: 'Discord', icon: FaDiscord },
  { href: 'https://www.maplabs.io/blog/', label: 'Blog', icon: FaBlog },
];

export default function Header() {
  return (
    <footer
      className=' bg-black font-primary text-white lg:h-[24rem]'
      style={{
        backgroundColor: 'black',
      }}
    >
      <div className='layout pt-12'>
        <div className='flex flex-col justify-evenly lg:flex-row'>
          <div className='mx-8'>
            <div className='text-2xl font-bold'>BUILD</div>
            {Build.map((item, key) => {
              return (
                <div className='group my-4 flex h-4 transition ' key={key}>
                  <UnderlineLink
                    className='mt-[-6px] text-sm transition '
                    href={item.href}
                  >
                    <div>{item.label}</div>
                  </UnderlineLink>
                </div>
              );
            })}
          </div>
          <div className='mx-8'>
            <div className='text-2xl font-bold'>Community</div>
            {Community.map((item, key) => {
              return (
                <div className='group my-4 flex h-4 transition ' key={key}>
                  <UnderlineLink
                    className='mt-[-6px] text-sm transition '
                    href={item.href}
                  >
                    <div className='flex ' key={key}>
                      {/* <Icon className='text-sm text-primary transition' /> */}
                      <div className='text-sm'>{item.label}</div>
                    </div>
                  </UnderlineLink>
                </div>
              );
            })}
          </div>
          <div className='mx-8'>
            <div className='text-2xl font-bold'>Grants</div>
            {Grants.map((item, key) => {
              return (
                <div className='group my-4 flex h-4 transition ' key={key}>
                  <UnderlineLink
                    className='mt-[-6px] text-sm transition '
                    href={item.href}
                  >
                    <div className='flex ' key={key}>
                      {/* <Icon className='text-sm text-primary transition' /> */}
                      <div className='text-sm'>{item.label}</div>
                    </div>
                  </UnderlineLink>
                </div>
              );
            })}
          </div>
          <div className='mx-8'>
            <div className='text-2xl font-bold'>Ecosystem</div>
            {Ecosystem.map((item, key) => {
              return (
                <div className='group my-4 flex h-4 transition ' key={key}>
                  <UnderlineLink
                    className='mt-[-6px] text-sm transition '
                    href={item.href}
                  >
                    <div className='flex ' key={key}>
                      {/* <Icon className='text-sm text-primary transition' /> */}
                      <div className='text-sm'>{item.label}</div>
                    </div>
                  </UnderlineLink>
                </div>
              );
            })}
          </div>
          <div className='mx-8'>
            <div className='text-2xl font-bold'>SOCIAL</div>
            {Social.map((item, key) => {
              const Icon = item.icon;
              return (
                <div className='group my-4 flex h-4 transition ' key={key}>
                  <UnderlineLink
                    className='mt-[-6px] text-sm transition '
                    href={item.href}
                  >
                    <div className='flex ' key={key}>
                      <Icon className='text-sm text-primary transition' />
                      <div className='ml-2 text-sm'>{item.label}</div>
                    </div>
                  </UnderlineLink>
                </div>
              );
            })}
          </div>
        </div>
        <div className='mt-8 text-center'>
          © {new Date().getFullYear()} By{' '}
          <UnderlineLink href='https://theodorusclarence.com?ref=tsnextstarter'>
            All rights reservied by MAP Labs.
          </UnderlineLink>
        </div>
      </div>
    </footer>
  );
}
