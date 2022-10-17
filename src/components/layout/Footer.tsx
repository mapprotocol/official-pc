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
      className='h-[42rem] bg-black font-primary text-white lg:h-[24rem]'
      style={{
        backgroundColor: 'black',
        backgroundImage:
          "url(data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E)",
      }}
    >
      <div className='layout pt-12'>
        <div className='flex flex-col justify-evenly lg:flex-row'>
          <div className='mx-12'>
            <div className='text-3xl font-bold'>BUILD</div>
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
          <div className='mx-12'>
            <div className='text-3xl font-bold'>SOCIAL</div>
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
            MapLabs, All Rights reserved
          </UnderlineLink>
        </div>
      </div>
    </footer>
  );
}
