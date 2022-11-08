import { Typography } from 'antd';
import Image from 'next/image';

import Link from '@/components/links/Link';

const Introduction = () => {
  return (
    <div className='layout flex min-h-[500px] flex-col gap-x-6 py-20 text-gray-300 dark:text-black lg:flex-row'>
      <div className='mb-10 flex-1'>
        <div className='text-cyan-400 dark:text-sky-700 '>
          What is MAP Protocol{' '}
        </div>
        {/* <div className='mt-6 text-2xl '>
          The Provably Secure Omnichain Layer of Web3
        </div> */}
        <h2 style={{ fontFamily: 'BigerOver' }} className='mt-6'>
          The Provably Secure Omnichain Layer of Web3
        </h2>
      </div>
      <div className='flex-1 font-primary'>
        <div className=''>
          Today’s blockchain developers are building applications on multiple
          competing and non-interoperable blockchains, resulting in inefficient
          operation, low user resources, and high costs. The future is
          omnichain. The omnichian infrastructure is the powerhouse enabling
          all-chain interoperability and onboarding the next billion Web2 users
          into Web3.
        </div>
        <div className='mt-6'>
          MAP Protocol offers the provably secure omnichain infrastructure built
          upon <b className='text-cyan-400 dark:text-sky-700'>Light-Client</b>{' '}
          and <b className='text-cyan-400 dark:text-sky-700'>Zero-Knowledge</b>{' '}
          technology.
        </div>
        <div className='mt-6 text-cyan-400 dark:text-sky-700'>
          <Link
            href='https://github.com/mapprotocol/awesome-map#articles'
            className=''
          >
            Read our blog post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
