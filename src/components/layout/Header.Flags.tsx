import ReactCountryFlag from 'react-country-flag';
import { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';

const Flags = () => {
  const [countryCode, setCountryCode] = useState<string>('GB');
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
              <div onClick={() => setCountryCode('GB')} className='px-2 py-2'>
                <ReactCountryFlag countryCode='GB' svg />
              </div>
            </Menu.Item>
            <Menu.Item>
              <div onClick={() => setCountryCode('KR')} className='px-2 py-2'>
                <ReactCountryFlag countryCode='KR' svg />
              </div>
            </Menu.Item>
            <Menu.Item>
              <div onClick={() => setCountryCode('CN')} className='px-2 py-2'>
                <ReactCountryFlag countryCode='CN' svg />
              </div>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default Flags;
