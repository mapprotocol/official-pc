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
      <Seo />
      <Stats data={stats} />
      <Divider />
      <div className='mx-auto rounded bg-black text-center font-primary lg:w-[600px]'>
        <h1 className=''>$MAP distribution</h1>
      </div>
      <Chart data={stakeData} />
    </Layout>
  );
}
