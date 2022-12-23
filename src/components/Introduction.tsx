import { Typography } from 'antd';
import { useRouter } from 'next/router';
import TEXT from '../i18n';
import Image from 'next/image';

import Link from '@/components/links/Link';

const Introduction = () => {
  const { locale } = useRouter();
  // @ts-ignore
  const t = TEXT[locale];

  return (
    <div className='layout flex min-h-[500px] flex-col gap-x-6 py-20 text-gray-300 dark:text-black lg:flex-row'>
      <div className='mb-10 flex-1'>
        <div className='text-cyan-400 dark:text-sky-700 '>
          What is MAP Protocol{' '}
        </div>
        <h2 style={{ fontFamily: 'BigerOver' }} className='mt-6'>
          The Provably Secure Omnichain Layer of Web3
        </h2>
      </div>
      <div className='flex-1 font-primary'>
        <div className=''>{t['introductionP1']}</div>
        <div className='mt-6'>
          {t['introductionP2.before']}
          <b className='text-cyan-400 dark:text-sky-700'>
            {t['introductionP2.lightClient']}
          </b>
          {t['introductionP2.and']}
          <b className='text-cyan-400 dark:text-sky-700'>
            {t['introductionP2.zeroKnowledge']}
          </b>{' '}
          {t['introductionP2.after']}
        </div>
        <div className='mt-6 text-cyan-400 dark:text-sky-700'>
          <Link
            href='https://github.com/mapprotocol/awesome-map#articles'
            className=''
          >
            {t['introductionP3']}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
