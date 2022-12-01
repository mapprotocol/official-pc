import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from '@/components/links/Link';

import Divider from '@/components/Divider';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Chart from '@/components/StakeChart';
import Stats from '@/components/StakeStats';

import stakeData from '@/stake.data';

import { StakeData } from '@/types/stake';

type Item = {
  title: string;
  subtitle?: string;
  url: string;
  icon: string;
};

const Card = ({ item }: { item: Item }) => {
  return (
    <div className='mx-auto mb-4 w-[160px] rounded bg-white px-4 py-4 text-center font-primary text-gray-800 transition hover:scale-105 hover:cursor-pointer dark:text-black'>
      <Image src={item.icon} height={50} width={50} alt={item.title} />
      <div className='flex flex-col'>
        <div className='text-1xl h-[60px]'>{item.title}</div>
        <div className='mb-2 text-xs'>{item.subtitle}</div>
        <a
          target='_blank'
          href={item.url}
          className='rounded bg-gray-300 p-2'
          rel='noreferrer'
        >
          Purchase
        </a>
      </div>
    </div>
  );
};

const Section = ({
  title,
  exchanges,
}: {
  title: string;
  exchanges: Item[];
}) => {
  return (
    <div className=''>
      <h3 className='mb-8 text-center'>{title}</h3>
      <div className='flex flex-row flex-wrap gap-[5px]'>
        {exchanges.map((exchange: Item, index: number) => (
          <Card item={exchange} key={index} />
        ))}
      </div>
    </div>
  );
};

const exchanges = {
  centralized: [
    {
      icon: 'data:image/png;base64,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',
      title: 'Kucoin',
      url: 'https://www.kucoin.com/ko/trade/MAP-USDT',
    },
    {
      icon: 'data:image/png;base64,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',
      title: 'Bithumb',
      url: 'https://www.bithumb.com/trade/order/MAP_KRW',
    },
    {
      icon: 'data:image/png;base64,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',
      title: 'Coinone',
      url: 'https://coinone.co.kr/exchange/trade/map/krw',
    },
    {
      icon: '/stake/Uniswap.png',
      title: 'Uniswap',
      // subtitle: 'Get MAP via Uniswap',
      url: '',
    },
    {
      icon: '/stake/Hiveswap.png',
      title: 'Hiveswap',
      // subtitle: 'Get MAP via Hiveswap',
      url: 'https://swap.hiveswap.io/#/swap',
    },
    {
      icon: '/stake/Pancakeswap.png',
      title: 'Pancakeswap',
      // subtitle: 'Get MAP via Pancakeswap',
      url: 'https://pancakeswap.finance/info/pool/0xd034e9294833d5739d852548a9b9724c4453db5f',
    },
  ],
};

export default function HomePage() {
  const [stats, setStats] = useState<StakeData | null>(null);
  useEffect(() => {
    if (stats == null) {
      const urls = [
        'https://mainnet-api.mapscan.io/scan/queryMapChainData?typeStr=supply,staking,address,transfer,block,epoch',
        'https://staking.mapprotocol.io/api/apy/list',
      ];
      const requests = urls.map((url) => {
        return axios.get(url);
      });
      Promise.all(requests).then((responses) => {
        const stakeItems = responses[1].data.data;

        setStats({
          staking: responses[0].data.data.staking / 1000000000000000000,
          supply: responses[0].data.data.supply / 1000000000000000000,
          validators: stakeItems.list.length,
          apy: `${stakeItems.avgApy.toFixed(1)} %`,
        });
      });
    }
  }, [stats]);

  return (
    <Layout>
      <div className='layout'>
        <Seo />
        <Stats data={stats} />
        <div className='mx-auto mt-10 flex justify-center rounded text-center font-primary text-white dark:text-black'>
          <div className='hidden flex-col gap-10 dark:flex lg:flex-row'>
            <Link href='https://staking.maplabs.io'>
              <Image width='200' height='50' src={'/stake/1_light.png'}></Image>
            </Link>
            <Link href='https://maposcan.io/validators'>
              <Image width='200' height='50' src={'/stake/2_light.png'}></Image>
            </Link>
            <Link href='https://docs.mapprotocol.io/run/howtobecomeanewvalidator'>
              <Image width='200' height='50' src={'/stake/3_light.png'}></Image>
            </Link>
          </div>
          <div className='flex flex-col gap-10  dark:hidden lg:flex-row'>
            <Link href='https://staking.maplabs.io'>
              <Image width='200' height='50' src={'/stake/1_dark.png'}></Image>
            </Link>
            <Link href='https://maposcan.io/validators'>
              <Image width='200' height='50' src={'/stake/2_dark.png'}></Image>
            </Link>
            <Link href='https://docs.mapprotocol.io/run/howtobecomeanewvalidator'>
              <Image width='200' height='50' src={'/stake/3_dark.png'}></Image>
            </Link>
          </div>
        </div>

        <Divider />
        <div className='mx-auto rounded text-center font-primary text-white dark:text-black lg:w-[600px]'>
          <h1 className=''>MAPO Tokenomics</h1>
        </div>
        <div className='mt-10 flex flex-col items-center gap-10 font-primary'>
          <div className='text-white dark:text-black'>
            <div className='mt-4'>
              The native utility token of MAP Protocol is MAPO token. MAP
              Protocol has its own relay chain (PoS) and MAPO token supports the
              monetary flow of the entire MAPO economic system. Core use cases
              of the MAPO token include:
            </div>
            <div className='mt-4 flex flex-col gap-4 lg:flex-row'>
              <div className='mt-4 flex-1 basis-1/5 rounded bg-gray-800 p-4  text-white dark:bg-white dark:text-black'>
                <div className='mb-2 text-center font-bold text-cyan-400 dark:text-sky-700'>
                  Gas Metering
                </div>{' '}
                MAPO token is the native token for paying transaction fees.
                Users need to specify a certain amount of transaction fee in
                MAPO so the transaction can be successfully processed and
                included in the blockchain. MAPO token is used as the gas
                metering of smart contract execution.
              </div>
              <div className='mt-4 flex-1 basis-1/5 rounded bg-gray-800 p-4 text-white dark:bg-white dark:text-black'>
                <div className='mb-2 text-center font-bold text-cyan-400 dark:text-sky-700'>
                  Protocol Security
                </div>{' '}
                MAPO Relay Chain is a Proof-of-Stake blockchain which means the
                security of the network is protected by staked tokens. MAPO
                token is used to incentivize token holders and power the
                mechanics around the creation of a decentralized node
                infrastructure on which the blockchain can run.
              </div>
              <div className='mt-4 flex-1 basis-1/5 rounded bg-gray-800 p-4 text-white dark:bg-white dark:text-black'>
                <div className='mb-2 text-center font-bold text-cyan-400 dark:text-sky-700'>
                  On-chain Governance
                </div>{' '}
                MAP Protocol is a permissionless and decentralized network which
                is governed by the community. Any protocol level decisions or
                improvements will be put as a proposal which will go through the
                open governance process to finalize. MAPO is the only accepted
                token used as the measure in the governance process, including
                proposing referenda, electing council members, voting, etc
              </div>
            </div>
          </div>
          <img
            className='mt-10 w-[100%] dark:hidden lg:w-[80%]'
            src='/stake/pieChart_dark.png'
            alt=''
          />
          <img
            className='mt-10 hidden w-[100%] dark:flex lg:w-[80%]'
            src='/stake/pieChart_light.png'
            alt=''
          />
        </div>
        {/* <Chart data={stakeData} /> */}

        <Divider />
        <div className='mx-auto mb-20 text-center font-primary text-white dark:text-black'>
          <h1 className=''>Get $MAPO Token</h1>
          <Section title='' exchanges={exchanges.centralized} />
        </div>
      </div>
    </Layout>
  );
}
