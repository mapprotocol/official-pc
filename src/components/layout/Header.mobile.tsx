import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import UnderlineLink from '../links/UnderlineLink';

const links = [
  { href: '/stake', name: 'Stake 🔥' },
  { href: 'https://docs.maplabs.io/develop', name: 'Build' },
  {
    href: 'https://coinmarketcap.com/currencies/map-protocol/markets/',
    name: 'Get $MAP',
  },
];
const MainLinks = [
  {
    href: 'https://docsend.com/view/3ugtsz5mut39juc6',
    name: 'Introduction',
  },
  {
    href: 'https://files.maplabs.io/pdf/mapprotocol_Litebook_en.pdf',
    name: 'Litebook',
  },
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
    name: 'Official ERC-20 Address',
  },
  {
    href: 'https://bscscan.com/address/0x8105ECe4ce08B6B6449539A5db23e23b973DfA8f',
    name: 'Official BSC Address',
  },
  {
    href: 'https://polygonscan.com/address/0xBAbceE78586d3e9E80E0d69601A17f983663Ba6a',
    name: 'Official Polygon Address',
  },
];

export default function Example() {
  return (
    <Menu as='li' className='relative z-50 inline-block text-left text-white'>
      <div>
        <Menu.Button className='inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
          <label tabIndex={0} className='btn btn-ghost btn-circle'>
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
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-500 rounded-md bg-[#272935] font-primary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
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
            {Others.map((item, key) => {
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
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
