import * as React from 'react';
import useDarkMode from 'use-dark-mode';

const ThemeSwitch = () => {
  const { value: hasActiveDarkMode, toggle: activateDarkMode } = useDarkMode(
    false,
    { classNameDark: 'dark', classNameLight: 'light' }
  );

  const Icon = hasActiveDarkMode ? (
    <path d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'>
      {' '}
    </path>
  ) : (
    <g>
      <circle cx='12' cy='12' r='5'></circle>
      <path d='M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42'></path>
    </g>
  );

  return (
    <div
      className='cursor-pointer text-black dark:text-white'
      onClick={activateDarkMode}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        {Icon}
      </svg>
    </div>
  );
};

export default ThemeSwitch;
