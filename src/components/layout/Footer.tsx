import * as React from 'react';
import Image from 'next/image';
import {
  FaBlog,
  FaDiscord,
  FaMedium,
  FaTelegram,
  FaTwitter,
} from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { useRouter } from 'next/router';
import TEXT from '../../i18n';

import UnderlineLink from '@/components/links/UnderlineLink';

export default function Header() {
  const { locale } = useRouter();
  // @ts-ignore
  const t = TEXT[locale];

  const getLitebook = (lang: any) => {
    switch (lang) {
      case 'en-US':
        return 'https://files.maplabs.io/pdf/mapprotocol_Litebook_en.pdf';
      case 'zh-CN':
        return 'https://files.maplabs.io/pdf/mapprotocol_Litebook_cn.pdf';
      case 'ko-KR':
        return 'https://files.maplabs.io/pdf/mapprotocol_Litebook_kr.pdf';
      default:
        return 'https://files.maplabs.io/pdf/mapprotocol_Litebook_en.pdf';
    }
  };

  const Build = [
    { href: 'https://docs.mapprotocol.io', label: t['footer.docs'] },
    { href: 'https://github.com/mapprotocol', label: t['footer.github'] },
    {
      href: getLitebook(locale),
      label: t['footer.whitepaper'],
    },
  ];
  const Community = [
    {
      href: 'https://forum.maplabs.io/latest',
      label: t['footer.forum'],
    },
    {
      href: 'https://staking.mapprotocol.io/#/governance',
      label: t['footer.dao'],
    },
  ];
  const Grants = [
    {
      href: 'https://forum.maplabs.io/t/map-omnichain-builder-grants-program/3980',
      label: t['footer.builderGrants'],
    },
    {
      href: 'https://forum.maplabs.io/t/about-the-academy-category/3989',
      label: t['footer.researchGrants'],
    },
    {
      href: 'https://forum.maplabs.io/t/map-community-contributor-grants-program/3988',
      label: t['footer.communityGrants'],
    },
  ];
  const Ecosystem = [
    {
      href: 'https://swap.hiveswap.io/#/swap',
      label: t['footer.hiveswap'],
    },
    {
      // href: 'https://www.barternetwork.io/',
      href: '',
      label: t['footer.butter'],
    },
    {
      href: 'https://befiwallet.io/',
      label: t['footer.befi'],
    },
  ];
  const Social = [
    {
      href: 'https://medium.com/@mapprotocolofficial/',
      label: t['footer.medium'],
      icon: FaMedium,
    },
    {
      href: 'https://mobile.twitter.com/MapProtocol/',
      label: t['footer.twitter'],
      icon: FaTwitter,
    },
    {
      href: 'https://t.me/MAPprotocol/',
      label: t['footer.telegram'],
      icon: FaTelegram,
    },
    {
      href: 'https://open.kakao.com/o/gP9WduRb/',
      label: t['footer.kakao'],
      icon: RiKakaoTalkFill,
    },
    {
      href: 'https://discord.com/invite/W3RnfZE6DV',
      label: t['footer.discord'],
      icon: FaDiscord,
    },
    {
      href: 'https://www.maplabs.io/blog/',
      label: t['footer.blog'],
      icon: FaBlog,
    },
    {
      href: 'https://blog.naver.com/mapprotocol',
      label: t['footer.naver'],
      icon: () => (
        <img className='h-[14px] w-[14px]' src={'/map-light/naverBlog.png'} />
      ),
    },
  ];

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
            <div className='text-2xl font-bold'>{t['footer.build']}</div>
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
            <div className='text-2xl font-bold'>{t['footer.community']}</div>
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
            <div className='text-2xl font-bold'>{t['footer.grants']}</div>
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
            <div className='text-2xl font-bold'>{t['footer.ecosystem']}</div>
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
            <div className='text-2xl font-bold'>{t['footer.social']}</div>
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
            All rights reservied by MAP Protocol.
          </UnderlineLink>
        </div>
      </div>
    </footer>
  );
}
