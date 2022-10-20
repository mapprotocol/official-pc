import { SectionCard } from '@/components/SectionCard';
import SectionCardContent from '@/components/SectionCardContent';

import All from '~/features/all.svg';
import Dev from '~/features/dev.svg';
import Instant from '~/features/instant.svg';
import Min from '~/features/min.svg';
import Security from '~/features/security.svg';

const Features = () => {
  return (
    <div className='mt-8'>
      <div className='align-center -mt-4 -mb-10 flex flex-col justify-evenly font-primary sm:-m-4 lg:-mx-4 lg:flex-row'>
        <SectionCard>
          <SectionCardContent
            icon={Security}
            title='Best-in-class Security'
            content='MAP Protocol offers the highest blockchain-level security built by Light-client network and ZK (STARK and SNARK) technology.'
          />
        </SectionCard>
        <SectionCard>
          <SectionCardContent
            icon={All}
            title=' Real Omnichain Network'
            content="MAP Protocol embeds heterogeneous chains' algorithms into MAP Relay Chain (PoS, EVM-compatible) to achieve seamless communication among EVM & Non-EVM chains."
          />
        </SectionCard>
        <SectionCard>
          <SectionCardContent
            icon={Dev}
            title='Full Developer Support'
            content='No matter on which chains dApps deployed, they can achieve interoperability and become omnichain dApps by integrating with MAP SDKs.'
          />
        </SectionCard>
        <SectionCard>
          <SectionCardContent
            icon={Min}
            title='Minimum Transaction Cost'
            content='No additional cost for cross-chain transactions other than connected chains’ gas fees. By implementing ZK technology, gas fees are further reduced to minimum.'
          />
        </SectionCard>
        <SectionCard>
          <SectionCardContent
            icon={Instant}
            title='Instant Transaction Confirmation'
            content="Inter-chain programs and on-chain smart contracts work efficiently to ensure the cross-chain speed is only related to each chain's block time."
          />
        </SectionCard>
      </div>
    </div>
  );
};

export default Features;
