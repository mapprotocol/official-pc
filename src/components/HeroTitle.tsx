import Link from '@/components/links/Link';

import Stake from '~/map/stake.svg';

import { Typography } from 'antd';
const { Title } = Typography;

const HeroTitle = () => {
  return (
    <div className=''>
      <div className='mx-auto flex h-screen content-center items-center justify-center text-center font-primary'>
        <div className=''>
          <div className='text-4xl font-bold text-blue-100 lg:text-6xl lg:leading-relaxed'>
            Convert single chain dApps into Ominichain dApps
          </div>
          <div className='my-4 text-xl font-bold leading-loose text-gray-300 lg:text-3xl'>
            Built upon light-client and zk-SNARK
          </div>

          <div className='flex'>
            <Link href='/stake' className='mx-auto '>
              <Stake className='hover:pointer text-[14rem] transition-all duration-100 hover:scale-125 lg:text-[24rem]' />
            </Link>
          </div>
        </div>
      </div>

      <div className='mx-auto flex h-screen content-center items-center justify-center border-y-2 text-center font-primary'>
        <div className='flex flex-col'>
          <h1 className='mb-8'>
            Convert single chain dApps into Ominichain dApps
          </h1>
          <h3 className=''>Convert single chain dApps into Ominichain dApps</h3>
          <Link href='/stake' className='mx-auto '>
            <Stake className='hover:pointer text-[14rem] transition-all duration-100 hover:scale-125 lg:text-[24rem]' />
          </Link>
        </div>
      </div>

      <div className='mx-auto flex h-screen content-center items-center justify-center border-y-2 text-center font-primary'>
        <div className='flex flex-col'>
          <Title className='mb-8'>
            Convert single chain dApps into Ominichain dApps
          </Title>
          <Title level={3}>
            Convert single chain dApps into Ominichain dApps
          </Title>
          <Link href='/stake' className='mx-auto '>
            <Stake className='hover:pointer text-[14rem] transition-all duration-100 hover:scale-125 lg:text-[24rem]' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroTitle;
