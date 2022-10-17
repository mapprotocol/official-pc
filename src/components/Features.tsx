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
            title='Security-Finality'
            content='Best-in-class blockchain-level security via independent self-verification cross-chain verification network with light-client and zk-SNARK.'
          />
        </SectionCard>
        <SectionCard>
          <SectionCardContent
            icon={All}
            title='All-Chain Coverage'
            content="Embed heterogeneous chains' signing and hashing algorithm into the EVM layer of the MAP Relay Chain to ensure seamless communication among all EVM and Non-EVM chains."
          />
        </SectionCard>
        <SectionCard>
          <SectionCardContent
            icon={Instant}
            title='Instant Confirmation'
            content="Inter-chain communication programs and on-chain smart contracts work together efficiently to ensure that speed is only related to each chain's block time."
          />
        </SectionCard>
      </div>
      <div className='align-center -mt-4 -mb-10 flex flex-col justify-evenly sm:-m-4 lg:-mx-4 lg:flex-row '>
        <SectionCard w='w-2/5'>
          <SectionCardContent
            icon={Min}
            title='Minimum Cost'
            content='No additional cost for cross-chain transactions other than gas fees.By zk-SNARK, gas fee is further reduced to minimum.'
          />
        </SectionCard>
        <SectionCard w='w-3/5'>
          <SectionCardContent
            icon={Dev}
            title='Developer-Ready'
            content="No matter on which chain dApp’s main smart contracts are deployed, dApps can easily connect to MAP's omnichain network through MAP's SDKs, thus naturally inherit the omnichain capabilities of MAP Protocol. dApps can also choose to develop their own tailored version by forking MAP Cross-chain Service (MCS) and installing Messenger SDK."
          />
        </SectionCard>
      </div>
    </div>
  );
};

export default Features;
