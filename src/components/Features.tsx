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
        <div className='text-1xl lg:text-3xl '>
          MAP is the Super Connector of Blockchains
        </div>
        <div className='mt-4 font-primary'>
          Core pillars to MAP Omnichain Infrastructure
        </div>
      </div>
      <div className='align-center -mt-4 -mb-10 flex flex-col justify-evenly font-primary sm:-m-4 lg:-mx-4 lg:flex-row'>
        <SectionCard>
          <div>
            Expandable and decentralized MAP Relay Chain to support both EVM and
            Non-EVM chains connections
          </div>
        </SectionCard>
        <SectionCard>
          <div>
            Light-Client technology to verify all cross-chain transactions with
            definite and unambiguous results
          </div>
        </SectionCard>
        <SectionCard>
          <div>
            Zero-Knowledge technolgy to optimize and peed up verification
            process and reduce transaction costs
          </div>
        </SectionCard>
        <SectionCard>
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
