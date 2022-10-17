const SectionCardContent = ({ title, content, icon }) => {
  return (
    <div className='flex-grow'>
      <div className='flex flex-row'>
        <div className='w-4 pt-1 text-2xl'>{icon()}</div>
        <h2 className='title-font ml-4 mb-3 text-xl  font-medium '>{title}</h2>
      </div>
      <p className='font-primary text-sm '>{content}</p>
    </div>
  );
};

export default SectionCardContent;
