import { Menu, Transition } from '@headlessui/react';
import { useState } from 'react';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ReactCountryFlag from 'react-country-flag';

const Flags = () => {
  const { locale, asPath } = useRouter();
  const countryCodeTransfer = (locale: any) => {
    switch (locale) {
      case 'en-US':
        return 'GB';
      case 'zh-CN':
        return 'CN';
      case 'ko-KR':
        return 'KR';
    }
  };
  const [countryCode, setCountryCode] = useState<any>(() =>
    countryCodeTransfer(locale)
  );

  return (
    <Menu as='li' className='relative inline-block text-left text-white'>
      <div>
        <Menu.Button className='inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
          <ReactCountryFlag countryCode={countryCode} svg />
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
        <Menu.Items className='absolute right-0 mt-2 w-[45px] origin-top-right divide-y divide-gray-500 rounded-md bg-[#272935] font-primary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='px-1 py-1 text-center hover:cursor-pointer'>
            <Menu.Item>
              <Link href={asPath} locale='en-US'>
                <div onClick={() => setCountryCode('GB')} className='px-2 py-2'>
                  <ReactCountryFlag countryCode='GB' svg />
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href={asPath} locale='ko-KR'>
                <div onClick={() => setCountryCode('KR')} className='px-2 py-2'>
                  <ReactCountryFlag countryCode='KR' svg />
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href={asPath} locale='zh-CN'>
                <div onClick={() => setCountryCode('CN')} className='px-2 py-2'>
                  <ReactCountryFlag countryCode='CN' svg />
                </div>
              </Link>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default Flags;
