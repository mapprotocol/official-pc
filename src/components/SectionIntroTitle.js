export const SectionIntroTitle = ({ title, content }) => {
  return (
    <div className='mb-20 text-center'>
      <h1 className='title-font mb-4 text-4xl font-extrabold leading-10  tracking-tight sm:text-5xl sm:leading-none md:text-6xl'>
        {title}
      </h1>
      <p className='mx-auto text-base leading-relaxed lg:w-3/4'>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </p>
      <div className='mt-6 flex justify-center'>
        <div className='inline-flex h-1 w-16 rounded-full bg-indigo-500'></div>
      </div>
    </div>
  );
};
