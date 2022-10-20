export const SectionCard = ({ children, w = 'w-1/5' }) => {
  return (
    <div className={`mb-6 flex flex-col p-3 md:mb-0 lg:${w}`}>
      <div className='border-light-blue-500 translate-x-6 -translate-y-6 transform rounded border-2 border-solid bg-white p-4 dark:border-transparent dark:bg-gray-800 dark:text-white '>
        {children}
      </div>
    </div>
  );
};
