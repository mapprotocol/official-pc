const Pics = () => {
  return (
    <div className='w-[calc(100% -20px)]'>
      <div
        style={{
          borderRadius: '10px',
          backdropFilter: 'blur(2px)',
          background: 'rgba(255, 255, 255, 0.5)',
        }}
        className='layout py-20'
      >
        <div className='ml-[20px] mr-[20px]'>
          <div className='text-1xl text-center text-black lg:text-3xl'>
            Omnichain Network
          </div>
          <img src='/images/1.png' alt='' />
        </div>
        <div className='mt-40 ml-[20px] mr-[20px]'>
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
