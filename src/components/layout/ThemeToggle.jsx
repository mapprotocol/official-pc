//ThemeToggle.js
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

import { ThemeContext } from './ThemeContext';

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className='rounded-full p-2 transition duration-500 ease-in-out'>
      {theme === 'dark' ? (
        <FaSun
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className='text-1xl cursor-pointer text-gray-500 dark:text-gray-400'
        />
      ) : (
        <FaMoon
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className='text-1xl cursor-pointer text-gray-500 dark:text-gray-400'
        />
      )}
    </div>
  );
};

export default Toggle;
