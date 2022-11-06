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
        <div className='mt-6 text-2xl '>
          The Provably Secure Omnichain Layer of Web3
        </div>
      </div>
      <div className='flex-1 font-primary'>
        <div className=''>
          Today’s blockchain developers are building applications on top of
          dozens of competing and non-interoperable blockchains. The future is
          omnichain, and the omnichain infrastructure is becoming evitable to
          support interoperarbility and the upcoming explosion of Web3.
        </div>
        <div className='mt-6'>
          At MAP, we are building the provably secure omnichain infrastructure
          using Light-Client and Zero-Knowledge technology.
        </div>
        <div className='mt-6 text-cyan-400 dark:text-sky-700'>
          <Link
            href='https://github.com/mapprotocol/awesome-map#articles'
            className=''
          >
            Read our blog post{' '}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
