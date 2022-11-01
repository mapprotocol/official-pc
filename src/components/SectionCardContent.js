const SectionCardContent = ({ title, content, icon }) => {
  return (
    <div className='flex-grow'>
      <div className='flex flex-col'>
        <div className='mx-auto w-4 pt-1 text-2xl'>{icon()}</div>
        <h2 className='title-font mb-3 text-left text-xl font-medium '>
          {title}
        </h2>
      </div>
      <p className='text-left font-primary text-sm '>{content}</p>
    </div>
  );
};

export default SectionCardContent;
