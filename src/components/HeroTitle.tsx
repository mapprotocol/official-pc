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
            Empower Web3 Apps to Thrive
            <br />
            in Omnichain Future.
          </div>
          <div className='my-4 text-xl font-bold leading-loose lg:text-2xl'>
            by MAP Protocol’s Provably Secure and Most <br /> Versatile
            Omnichain Infrastructure
          </div>

          <div className='mt-24 hidden flex-wrap dark:flex'>
            <Link
              href='/'
              className='hover:pointer mx-auto text-[10rem] transition-all duration-100 hover:scale-125 lg:text-[15rem]'
            >
              <Image
                className=''
                src='/map-light/litepaper_light.png'
                width='200'
                height='50'
                alt=''
              />
            </Link>

            <Link
              href='/stake'
              className='hover:pointer mx-auto text-[10rem] transition-all duration-100 hover:scale-125 lg:text-[15rem]'
            >
              <Image
                className=''
                src='/map-light/stake now.png'
                width='200'
                height='50'
                alt=''
              />
            </Link>

            <Link
              href='/'
              className='hover:pointer mx-auto text-[10rem] transition-all duration-100 hover:scale-125 lg:text-[15rem]'
            >
              <Image
                className=''
                src='/map-light/sdks_light.png'
                width='200'
                height='50'
                alt=''
              />
            </Link>
          </div>
          <div className='mt-24 flex flex-wrap dark:flex dark:hidden'>
            <Link
              href='/'
              className='hover:pointer mx-auto flex items-center text-[10rem] transition-all duration-100 hover:scale-125 lg:text-[15rem]'
            >
              <Image
                className=''
                src='/map-light/litepaper_dark.png'
                width='200'
                height='50'
                alt=''
              />
            </Link>
            <Link
              href='/stake'
              className='hover:pointer mx-auto flex items-center text-[10rem] transition-all duration-100 hover:scale-125 lg:text-[15rem]'
            >
              {/* <Stake className='hover:pointer text-[10rem] transition-all duration-100 hover:scale-125 lg:text-[15rem]' /> */}
              <Image
                className=''
                src='/map-light/stake_dark.png'
                width='220'
                height='80'
                alt=''
              />
            </Link>
            <Link
              href='/'
              className='hover:pointer mx-auto flex items-center text-[10rem] transition-all duration-100 hover:scale-125 lg:text-[15rem]'
            >
              <Image
                className=''
                src='/map-light/sdks_dark.png'
                width='200'
                height='50'
                alt=''
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTitle;
