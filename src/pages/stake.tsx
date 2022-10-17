import axios from 'axios';
import { useEffect, useState } from 'react';

import Divider from '@/components/Divider';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Chart from '@/components/StakeChart';
import Stats from '@/components/StakeStats';

import stakeData from '@/stake.data';

import { StakeData } from '@/types/stake';

export default function HomePage() {
  const [stats, setStats] = useState<StakeData | null>(null);
  useEffect(() => {
    if (stats == null) {
      const urls = [
        'https://mainnet-api.mapscan.io/scan/queryMapChainData?typeStr=supply,staking,address,transfer,block,epoch',
        'https://staking.maplabs.io/api/apy/list',
      ];
      const requests = urls.map((url) => {
        return axios.get(url);
      });
      Promise.all(requests).then((responses) => {
        const stakeItems = responses[1].data.data;

        const apys = stakeItems
          .filter((item: any) => item.apy > 0)
          .map((item: any) => item.apy);
        console.log(apys);

        const average = (array: number[]) =>
          array.reduce((a: number, b: number) => a + b) / array.length;

        setStats({
          staking: responses[0].data.data.staking / 1000000000000000000,
          supply: responses[0].data.data.supply / 1000000000000000000,
          validators: stakeItems.length,
          apy: `${average(apys).toFixed(1)} %`,
        });
      });
    }
  }, [stats]);

  return (
    <Layout>
      <Seo />
      <Stats data={stats} />
      <Divider />
      <div className='mx-auto rounded bg-black font-primary lg:w-[600px]'>
        <h1 className=''>$MAP distribution</h1>
        <h4 className='font-normal'>
          The following pie chart shows how $MAP protocol is distributed. 30% of
          the $MAP pool is allocated to validators. Validators earn rewards by
          staking $MAP
        </h4>
      </div>
      <Chart data={stakeData} />
    </Layout>
  );
}
