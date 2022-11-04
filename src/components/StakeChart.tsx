import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

function FullOption(props: any) {
  const [selected, setSelected] = useState<number | undefined>(0);
  const [hovered, setHovered] = useState<number | undefined>(undefined);

  const data = props.data
    .map((entry: any, i: any) => {
      if (hovered === i) {
        return {
          ...entry,
          color: 'grey',
        };
      }
      return entry;
    })
    .reverse();

  const lineWidth = 60;

  return (
    <div className='flex flex-col pt-12 pb-4 lg:flex-row'>
      <div className='mt-12 rounded-lg bg-white px-8 font-primary lg:w-[80%]'>
        <div>
          {/* <div className='h-8 font-bold'></div> */}
          <div className='ml-5'>
            The native utility token of MAP Protocol is MAP token. MAP Protocol
            has its own relay chain (PoS) and MAP token supports the monetary
            flow of the entire MAP economic system. Core use cases of the MAP
            token include: Gas Metering: MAP token is the native token for
            paying transaction fees. Users need to specify a certain amount of
            transaction fee in MAP so the transaction can be successfully
            processed and included in the blockchain. MAP token is used as the
            gas metering of smart contract execution. Protocol Security: MAP
            Relay Chain is a Proof-of-Stake blockchain which means the security
            of the network is protected by staked tokens. MAP token is used to
            incentivize token holders and power the mechanics around the
            creation of a decentralized node infrastructure on which the
            blockchain can run. On-chain Governance: MAP Protocol is a
            permissionless and decentralized network which is governed by the
            community. Any protocol level decisions or improvements will be put
            as a proposal which will go through the open governance process to
            finalize. MAP is the only accepted token used as the measure in the
            governance process, including proposing referenda, electing council
            members, voting, etc
          </div>
        </div>
      </div>
      <PieChart
        style={{
          fontSize: '3px',
          color: 'black',
        }}
        startAngle={270}
        data={data}
        radius={40}
        lineWidth={60}
        segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
        segmentsShift={(index) => (index === selected ? 6 : 1)}
        animate
        label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
        labelPosition={100 - lineWidth / 2}
        labelStyle={{
          fill: '#fff',
          opacity: 0.75,
          pointerEvents: 'none',
        }}
        onClick={(event, index) => {
          setSelected(index === selected ? undefined : index);
        }}
        onMouseOver={(_, index) => {
          setSelected(index === selected ? undefined : index);
        }}
        onMouseOut={() => {
          setTimeout(() => {
            setHovered(undefined);
          }, 300);
        }}
      />
    </div>
  );
}

export default FullOption;
