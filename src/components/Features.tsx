import { SectionCard } from '@/components/SectionCard';
import SectionCardContent from '@/components/SectionCardContent';
import { useRouter } from 'next/router';
import TEXT from '../i18n';

import Link from '@/components/links/Link';

import All from '~/features/all.svg';
import Dev from '~/features/dev.svg';
import Instant from '~/features/instant.svg';
import Min from '~/features/min.svg';
import Security from '~/features/security.svg';

const Features = () => {
  const { locale } = useRouter();
  // @ts-ignore
  const t = TEXT[locale];

  return (
    <div className='layout my-32'>
      <div className='mb-20 text-center text-gray-300 dark:text-black'>
        {/* <h2 style={{ fontFamily: 'BigerOver' }}>
          MAPO is the{' '}
          <span className='whitespace-nowrap text-cyan-400 dark:text-sky-700'>
            Super Connector
          </span>{' '}
          of Blockchains
        </h2> */}
        <h2 style={{ fontFamily: 'BigerOver' }}>{t['featureTitle']}</h2>
        <div className='mt-4 font-primary'>{t['featureSubTitle']}</div>
      </div>
      <div className='align-center -mt-4 -mb-10 flex flex-col justify-evenly font-primary sm:-m-4 lg:-mx-4 lg:flex-row'>
        <SectionCard>
          <div className='mb-2 text-center font-bold text-cyan-400 dark:text-sky-700'>
            {t['fullChainCover']}
          </div>
          <div>{t['fullChainCover.text']}</div>
        </SectionCard>
        <SectionCard>
          <div className='mb-2 text-center font-bold text-cyan-400 dark:text-sky-700'>
            {t['lightClient']}
          </div>
          <div>{t['lightClient.text']}</div>
        </SectionCard>
        <SectionCard>
          <div className='mb-2 text-center font-bold text-cyan-400 dark:text-sky-700'>
            {t['ZK']}
          </div>
          <div>{t['ZK.text']}</div>
        </SectionCard>
        <SectionCard>
          <div className='mb-2 text-center font-bold text-cyan-400 dark:text-sky-700'>
            {t['SDK']}
          </div>
          <div>{t['SDK.text']}</div>
        </SectionCard>
      </div>
    </div>
  );
};

export default Features;
