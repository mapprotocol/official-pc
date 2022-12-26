import { Typography } from 'antd';
import { useRouter } from 'next/router';
import TEXT from '../i18n';
import Image from 'next/image';

import Link from '@/components/links/Link';

import Stake from '~/map/stake.svg';
// const { Title } = Typography;

const HeroTitle = () => {
  const { locale } = useRouter();
  // @ts-ignore
  const t = TEXT[locale];

  return (
    <div className=''>
      <div className='mx-auto flex h-screen content-center items-center justify-center text-center font-primary'>
        <div className='text-gray-300 dark:text-black lg:w-[700px]'>
          <h1 className='mx[45px] font-bold lg:leading-relaxed'>
            {t['firstPageMainTitle']}
          </h1>
          <div className='my-4 text-xl font-bold leading-loose lg:text-2xl'>
            {t['firstPageSubTitle']}
          </div>
          <div className='mt-24 hidden flex-wrap dark:flex'>
            <Link
              href='https://files.maplabs.io/pdf/mapprotocol_Litebook_en.pdf'
              className='hover:pointer mx-auto text-[10rem] transition-all duration-100 hover:scale-125 lg:text-[15rem]'
            >
              <Image
                className=''
                src={`/map-light/${locale}/litepaper_light.png`}
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
                src={`/map-light/${locale}/stake now.png`}
                width='200'
                height='50'
                alt=''
              />
            </Link>

            <Link
              href=''
              className='hover:pointer mx-auto text-[10rem] transition-all duration-100 hover:scale-125 lg:text-[15rem]'
            >
              <Image
                className=''
                src={`/map-light/${locale}/sdks_light.png`}
                width='200'
                height='50'
                alt=''
              />
            </Link>
          </div>
          <div className='mt-24 flex flex-wrap dark:flex dark:hidden'>
            <Link
              href='https://files.maplabs.io/pdf/mapprotocol_Litebook_en.pdf'
              className='hover:pointer mx-auto flex items-center text-[10rem] transition-all duration-100 hover:scale-125 lg:text-[15rem]'
            >
              <Image
                className=''
                src={`/map-light/${locale}/litepaper_dark.png`}
                width='200'
                height='50'
                alt=''
              />
            </Link>
            <Link
              href='/stake'
              className='hover:pointer mx-auto flex items-center text-[10rem] transition-all duration-100 hover:scale-125 lg:text-[15rem]'
            >
              <Image
                className=''
                src={`/map-light/${locale}/stake_dark.png`}
                width='220'
                height='80'
                alt=''
              />
            </Link>
            <Link
              href=''
              className='hover:pointer mx-auto flex items-center text-[10rem] transition-all duration-100 hover:scale-125 lg:text-[15rem]'
            >
              <Image
                className=''
                src={`/map-light/${locale}/sdks_dark.png`}
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
