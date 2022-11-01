import { Typography } from 'antd';
import Image from 'next/image';

import Link from '@/components/links/Link';

import Stake from '~/map/stake.svg';
// const { Title } = Typography;

const HeroTitle = () => {
  return (
    <div className=''>
      <div className='mx-auto flex h-screen content-center items-center justify-center text-center font-primary'>
        <div className='text-gray-300 dark:text-black'>
          <div className='text-4xl font-bold lg:text-5xl lg:leading-relaxed'>
            Convert single chain dApps
            <br />
            into Ominichain dApps
          </div>
          <div className='my-4 text-xl font-bold leading-loose lg:text-2xl'>
            Built upon{' '}
            <div
              style={{ color: 'rgb(60, 247, 242)' }}
              className='inline text-blue-300 dark:text-blue-500'
            >
              {' '}
              light-client{' '}
            </div>{' '}
            and
            <div
              style={{ color: 'rgb(60, 247, 242)' }}
              className='inline text-blue-300 dark:text-blue-500'
            >
              {' '}
              zk-Technology{' '}
            </div>
          </div>

          <div className='hidden dark:flex'>
            <Link
              href='/stake'
              className='hover:pointer mx-auto mt-24 text-[10rem] transition-all duration-100 hover:scale-125 lg:text-[15rem]'
            >
              <Image
                className=''
                src='/map-light/stake now.png'
                width='200'
                height='50'
                alt=''
              />
            </Link>
          </div>
          <div className='flex dark:hidden'>
            <Link href='/stake' className='mx-auto '>
              <Stake className='hover:pointer text-[10rem] transition-all duration-100 hover:scale-125 lg:text-[15rem]' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTitle;
