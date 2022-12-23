import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import TEXT from '../../i18n';

import UnderlineLink from '../links/UnderlineLink';

export default function Example() {
  const { locale } = useRouter();
  // @ts-ignore
  const t = TEXT[locale];

  const MainLinks = [
    {
      href: 'https://docsend.com/view/3ugtsz5mut39juc6',
      name: t['introduction'],
    },
    {
      href: 'https://files.maplabs.io/pdf/mapprotocol_Litebook_en.pdf',
      name: t['litebook'],
    },
    { href: 'https://docs.mapprotocol.io', name: t['docs'] },
    { href: 'https://github.com/mapprotocol', name: t['github'] },
    { href: '/brand', name: t['brands'] },
  ];

  const SocialLinks = [
    {
      href: 'https://github.com/mapprotocol/awesome-map#articles',
      name: t['blog'],
    },
    {
      href: 'https://github.com/mapprotocol/awesome-map#amas',
      name: t['amas'],
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

  return (
    <Menu as='li' className='relative inline-block text-left text-white'>
      <div>
        <Menu.Button className='inline-flex w-full items-center justify-center rounded-md bg-opacity-20 px-2 py-2 text-xs font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
          {t['resources']}
          <ChevronDownIcon
            className='ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100'
            aria-hidden='true'
          />
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
          <div className='px-1 py-1 text-white'>
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
