import { StakeData, StatData } from '@/types/stake';

function convertToInternationalCurrencySystem(labelValue: number) {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + 'B'
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + 'M'
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + 'K'
    : Math.abs(Number(labelValue));
}

const Value = ({
  data,
  styles = '',
  index,
}: {
  data: StatData;
  styles?: string;
  index: number;
}) => {
  if (data.value || data.valueString) {
    return (
      <div
        // style={{ paddingTop: index >= 1 ? '0' : '1rem' }}
        className={`stat ${styles}`}
      >
        <div className='stat-title text-black'>{data.title}</div>
        <div className='stat-value text-black'>
          {data.value ? convertToInternationalCurrencySystem(data.value) : ''}
        </div>
        <div className='stat-value text-black'>{data.valueString}</div>
      </div>
    );
  } else
    return (
      <div
        // style={{ paddingTop: index >= 1 ? '0' : '1rem' }}
        className={`stat w-40 animate-pulse ${styles}`}
      >
        <div className='flex-1 space-y-6 py-1'>
          <div className='h-2 rounded bg-slate-700'></div>
          <div className='space-y-3'>
            <div className='grid grid-cols-3 gap-4'>
              <div className='col-span-2 h-2 rounded bg-slate-700'></div>
              <div className='col-span-1 h-2 rounded bg-slate-700'></div>
            </div>
            <div className='h-2 rounded bg-slate-700'></div>
          </div>
        </div>
      </div>
    );
};
const StakeStats = ({ data }: { data: StakeData | null }) => {
  return (
    <div className='pt-8 text-center font-primary'>
      <div className='stats flex w-[100%] flex-col bg-white shadow lg:inline-grid'>
        <Value
          index={0}
          data={{ title: 'Circulating Supply', value: data?.supply }}
        />
        <Value
          index={1}
          styles={'pt-0 lg:pt-4'}
          data={{
            title: 'Current Tokens Staked',
            value: data?.staking,
          }}
        />
        <Value
          index={2}
          styles='lg:inline pt-0 lg:pt-4'
          data={{
            title: 'Validators',
            value: data?.validators,
          }}
        />
        <Value
          index={3}
          styles='lg:inline pt-0 lg:pt-4'
          data={{
            title: 'Average APY',
            valueString: data?.apy,
          }}
        />
      </div>
      <div className='stats visible mt-4 hidden shadow lg:hidden'>
        <Value
          index={0}
          data={{
            title: 'Validators',
            value: data?.validators,
          }}
        />
        <Value
          index={0}
          data={{
            title: 'Average APY',
            valueString: data?.apy,
          }}
        />
      </div>
    </div>
  );
};

export default StakeStats;
