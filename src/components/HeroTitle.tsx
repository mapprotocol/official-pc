import { Typography } from 'antd';

import Link from '@/components/links/Link';

import Stake from '~/map/stake.svg';
const { Title } = Typography;

const HeroTitle = () => {
  return (
    <div className=''>
      <div className='mx-auto flex h-screen content-center items-center justify-center text-center font-primary'>
        <div className=''>
          <div className='text-4xl font-bold text-blue-100 lg:text-5xl lg:leading-relaxed'>
            Convert single chain dApps into Ominichain dApps
          </div>
          <div className='my-4 text-xl font-bold leading-loose text-gray-300 lg:text-2xl'>
            Built upon{' '}
            <div className='inline text-blue-300'> light-client </div> and
            <div className='inline text-blue-300'> zk-Technology </div>
          </div>

          <div className='flex'>
            <Link href='/stake' className='mx-auto '>
              <Stake className='hover:pointer text-[14rem] transition-all duration-100 hover:scale-125 lg:text-[24rem]' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTitle;
