const Pics = () => {
  return (
    <div className='w-[calc(100% -20px)] bg-white'>
      <div className='layout py-20'>
        <div className=''>
          <div className='text-1xl text-center text-black lg:text-3xl'>
            Omnichain Network
          </div>
          <img src='/images/1.png' alt='' />
        </div>
        <div className='mt-40'>
          <div className='text-1xl mb-12 text-center text-black lg:text-3xl'>
            How Light-client works on MAP Protocol
          </div>
          <img src='/images/2.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Pics;
