import { SectionCard } from '@/components/SectionCard';
import SectionCardContent from '@/components/SectionCardContent';

import Link from '@/components/links/Link';

import All from '~/features/all.svg';
import Dev from '~/features/dev.svg';
import Instant from '~/features/instant.svg';
import Min from '~/features/min.svg';
import Security from '~/features/security.svg';

const Features = () => {
  return (
    <div className='layout my-32'>
      <div className='mb-20 text-center text-gray-300 dark:text-black'>
        {/* <div className='text-1xl lg:text-3xl '>
          MAP is the{' '}
          <span className='text-cyan-400 dark:text-sky-700'>
            Super Connector
          </span>{' '}
          of Blockchains
        </div> */}
        <h2 style={{ fontFamily: 'BigerOver' }}>
          MAP is the{' '}
          <span className='whitespace-nowrap text-cyan-400 dark:text-sky-700'>
            Super Connector
          </span>{' '}
          of Blockchains
        </h2>
        <div className='mt-4 font-primary'>
          Core pillars to MAP Omnichain Infrastructure
        </div>
      </div>
      <div className='align-center -mt-4 -mb-10 flex flex-col justify-evenly font-primary sm:-m-4 lg:-mx-4 lg:flex-row'>
        <SectionCard>
          <div className='mb-2 text-center font-bold text-cyan-400 dark:text-sky-700'>
            Full Chain Coverage
          </div>
          <div>
            Expandable and decentralized MAP Relay Chain to support both EVM and
            Non-EVM chains connections
          </div>
        </SectionCard>
        <SectionCard>
          <div className='mb-2 text-center font-bold text-cyan-400 dark:text-sky-700'>
            Self-verifiable Light-Client
          </div>
          <div>
            Light-Client technology to verify all cross-chain transactions with
            definite and unambiguous results
          </div>
        </SectionCard>
        <SectionCard>
          <div className='mb-2 text-center font-bold text-cyan-400 dark:text-sky-700'>
            Advance ZK Technology
          </div>
          <div>
            Zero-Knowledge technolgy to optimize and speed up verification
            process and reduce transaction costs
          </div>
        </SectionCard>
        <SectionCard>
          <div className='mb-2 text-center font-bold text-cyan-400 dark:text-sky-700'>
            Comprehensive SDKs
          </div>
          <div>
            MAP Omnichain Service (MOS) and SDKs to offer built-in
            interoperability features for omnichain applications
          </div>
        </SectionCard>
      </div>
    </div>
  );
};

export default Features;
