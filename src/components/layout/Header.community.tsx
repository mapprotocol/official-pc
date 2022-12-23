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
      href: 'https://forum.maplabs.io/latest',
      name: t['footer.forum'],
    },
    {
      href: 'https://newspace.idavoll.network/project-staking-detail/MAPProtocol',
      name: t['footer.dao'],
    },
  ];

  return (
    <Menu as='li' className='relative inline-block text-left text-white'>
      <div>
        <Menu.Button className='inline-flex w-full items-center justify-center rounded-md bg-opacity-20 px-2 py-2 text-xs font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
          {t['community']}
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
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
