import Image from 'next/image';

const Trusted = () => {
  return (
    <div className='pt-8 pb-12 text-center'>
      <div className='my-12 text-3xl font-bold '>Backed by</div>
      <div className='flex justify-evenly lg:flex-row '>
        <div className=''>
          <Image
            className=''
            src='/map/Partnerships/ieee.png'
            width='240'
            height='50'
            alt=''
          />
        </div>
        <Image
          className='m-4 mt-4 rounded'
          src='/map/Partnerships/certik.png'
          width='250'
          height='60'
          alt=''
        />
      </div>
      <div className='flex flex-row justify-evenly '>
        <div className='w-40 font-primary lg:w-56'>
          Blochchain and Distributed Ledger Standards Committee
        </div>
        <div className='w-40 font-primary'></div>
      </div>
    </div>
  );
};

export default Trusted;
