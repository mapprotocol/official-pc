import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

function FullOption(props: any) {
  const [selected, setSelected] = useState<number | undefined>(0);
  const [hovered, setHovered] = useState<number | undefined>(undefined);

  const data = props.data.map((entry: any, i: any) => {
    if (hovered === i) {
      return {
        ...entry,
        color: 'grey',
      };
    }
    return entry;
  });

  const lineWidth = 60;

  return (
    <div className='flex flex-col pt-12 pb-4 lg:flex-row'>
      <PieChart
        style={{
          fontSize: '3px',
          color: 'black',
        }}
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
          setHovered(undefined);
        }}
      />
      <div className='mt-12 rounded-lg bg-bg px-8 font-primary lg:w-1/2'>
        {data.map((item: any, index: number) => (
          <div
            onMouseEnter={() =>
              setSelected(index === selected ? undefined : index)
            }
            className={`my-4 cursor-default ${
              selected == index ? 'text-white' : 'text-gray-500'
            }`}
            key={index}
          >
            <div className='h-8 font-bold'>{item.title}</div>
            <div className='ml-5'>{item.info}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FullOption;
