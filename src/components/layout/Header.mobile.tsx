import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Toggle from '@/components/layout/ThemeToggle';

import UnderlineLink from '../links/UnderlineLink';

const community = [
  {
    href: 'https://forum.maplabs.io/latest',
    name: 'Forum',
  },
  {
    href: 'https://newspace.idavoll.network/project-staking-detail/MAPProtocol',
    name: 'DAO',
  },
];
const grants = [
  {
    href: 'https://forum.maplabs.io/t/map-omnichain-builder-grants-program/3980',
    name: 'Builder Grant',
  },
  {
    href: 'https://forum.maplabs.io/t/about-the-academy-category/3989',
    name: 'Research Grant',
  },
  {
    href: 'https://forum.maplabs.io/t/map-community-contributor-grants-program/3988',
    name: 'Community Grant',
  },
];
const MainLinks = [
  {
    href: 'https://swap.hiveswap.io/#/swap',
    name: 'Hiveswap',
  },
  // {
  //   href: 'https://about.playverse.center/',
  //   name: 'Playverse',
  // },
  {
    href: 'https://www.barternetwork.io/',
    name: 'Barternetwork',
  },
  {
    href: '',
    name: 'Barter Bridge (beta)',
  },
  {
    href: 'https://befiwallet.io/',
    name: 'BeFi Wallet',
  },
];

const links = [
  { href: '/stake', name: 'Stake 🔥' },
  // { href: 'https://docs.maplabs.io/develop', name: 'Build' },
  // {
  //   href: 'https://coinmarketcap.com/currencies/map-protocol/markets/',
  //   name: 'Get $MAP',
  // },
  { href: 'https://mapscan.io/', name: 'Explorer' },
];
const ecosystem = [
  {
    href: 'https://docsend.com/view/3ugtsz5mut39juc6',
    name: 'Introduction',
  },
  {
    href: 'https://files.maplabs.io/pdf/mapprotocol_Litebook_en.pdf',
    name: 'Litebook',
  },
  { href: 'https://www.mapprotocol.io/blog/', name: 'Docs' },
  { href: '/brand', name: 'Brands' },
  // {
  //   href: 'https://forum.maplabs.io/latest',
  //   name: 'Forum',
  // },
  // { href: 'https://docs.maplabs.io/develop', name: 'Build' },
];

const SocialLinks = [
  {
    href: 'https://github.com/mapprotocol/awesome-map#articles',
    name: 'Blog',
  },
  {
    href: 'https://github.com/mapprotocol/awesome-map#amas',
    name: 'AMAs',
  },
  {
    href: 'https://github.com/mapprotocol/awesome-map#presentations',
    name: 'Presentations',
  },
];

const Others = [
  {
    href: 'https://etherscan.io/token/0x9e976f211daea0d652912ab99b0dc21a7fd728e4',
    name: 'ERC20',
  },
  {
    href: 'https://bscscan.com/address/0x8105ECe4ce08B6B6449539A5db23e23b973DfA8f',
    name: 'BSC',
  },
  {
    href: 'https://polygonscan.com/address/0xBAbceE78586d3e9E80E0d69601A17f983663Ba6a',
    name: 'Polygon',
  },
];

export default function Example() {
  return (
    <Menu as='li' className='relative z-50 inline-block text-left text-white'>
      <div>
        <Menu.Button className='inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
          <label tabIndex={0} className='btn-ghost btn-circle btn'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </label>
        </Menu.Button>
      </div>
      {/* <Toggle /> */}
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items
          style={{ maxHeight: 'calc(100vh - 74px)' }}
          className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-500 overflow-y-auto rounded-md bg-[#272935] font-primary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
        >
          <div className='px-1 py-1 '>
            {community.map((item, key) => {
              return (
                <Menu.Item key={key}>
                  <div className='px-2 py-2'>
                    <UnderlineLink className='w-full' href={`${item.href}`}>
                      {item.name}
                    </UnderlineLink>
                  </div>
                </Menu.Item>
              );
            })}
          </div>
          <div className='px-1 py-1 '>
            {grants.map((item, key) => {
              return (
                <Menu.Item key={key}>
                  <div className='px-2 py-2'>
                    <UnderlineLink className='w-full' href={`${item.href}`}>
                      {item.name}
                    </UnderlineLink>
                  </div>
                </Menu.Item>
              );
            })}
          </div>
          <div className='px-1 py-1 '>
            {ecosystem.map((item, key) => {
              return (
                <Menu.Item key={key}>
                  <div className='px-2 py-2'>
                    <UnderlineLink className='w-full' href={`${item.href}`}>
                      {item.name}
                    </UnderlineLink>
                  </div>
                </Menu.Item>
              );
            })}
          </div>
          <div className='px-1 py-1 '>
            {links.map((item, key) => {
              return (
                <Menu.Item key={key}>
                  <div className='px-2 py-2'>
                    <UnderlineLink className='w-full' href={`${item.href}`}>
                      {item.name}
                    </UnderlineLink>
                  </div>
                </Menu.Item>
              );
            })}
          </div>
          <div className='px-1 py-1 '>
            {MainLinks.map((item, key) => {
              return (
                <Menu.Item key={key}>
                  <div className='px-2 py-2'>
                    <UnderlineLink className='w-full' href={`${item.href}`}>
                      {item.name}
                    </UnderlineLink>
                  </div>
                </Menu.Item>
              );
            })}
          </div>
          <div className='px-1 py-1 '>
            {SocialLinks.map((item, key) => {
              return (
                <Menu.Item key={key}>
                  <div className='px-2 py-2'>
                    <UnderlineLink className='w-full' href={`${item.href}`}>
                      {item.name}
                    </UnderlineLink>
                  </div>
                </Menu.Item>
              );
            })}
          </div>
          <div className='px-1 py-1 '>
            <Menu.Item>
              <div className='px-2 py-2'>
                <div className='mb-2 text-gray-400'>Official Addresses</div>
                <div className='flex flex-row'>
                  {Others.map((item, key) => {
                    return (
                      <UnderlineLink
                        className='mx-2 '
                        key={key}
                        href={`${item.href}`}
                      >
                        {item.name}
                      </UnderlineLink>
                    );
                  })}
                </div>
              </div>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
