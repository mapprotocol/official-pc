import Image from 'next/image';

const Trusted = () => {
  return (
    <div className='layout pt-8 pb-12 text-center text-white dark:text-black'>
      <div className='my-12 text-3xl font-bold '>Backed by</div>
      <div className='hidden justify-evenly dark:visible dark:flex lg:flex-row'>
        <Image
          className=''
          src='/map-light/ieee.png'
          width='240'
          height='50'
          alt=''
        />
        <Image
          className='m-4 mt-4 rounded'
          src='/map-light/certik.png'
          width='250'
          height='60'
          alt=''
        />
      </div>
      <div className='visible flex justify-evenly dark:hidden lg:flex-row'>
        <Image
          className=''
          src='/map/Partnerships/ieee.png'
          width='240'
          height='50'
          alt=''
        />
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
