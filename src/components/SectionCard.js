export const SectionCard = ({ children, w = 'w-1/5' }) => {
  return (
    <div className={`mb-6 flex basis-1/5 flex-col p-3 md:mb-0 lg:${w}`}>
      <div className='dark:border-light-blue-500 h-[100%] transform rounded border-2 border-none bg-gray-800 p-4 text-white dark:border-transparent dark:bg-white dark:text-black '>
        {children}
      </div>
    </div>
  );
};
