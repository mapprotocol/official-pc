import logoLight from '~/map/logo_light.png';
import logoDark from '~/map/logo_dark.png';
import Image from 'next/image';

const Divider = () => (
  <div className='divider'>
    <span></span>
    <div
      style={{
        width: '24px',
        height: '24px',
        display: 'inline-block',
        margin: '0 4px',
      }}
    >
      <img
        className='dark:hidden'
        style={{ width: '24px', height: '24px' }}
        src={'/map/logo_dark.png'}
        alt=''
      />
      <img
        className='hidden dark:inline'
        style={{ width: '24px', height: '24px' }}
        src={'/map/logo_light.png'}
        alt=''
      />
    </div>
    <span></span>
  </div>
);

export default Divider;
