const Title = ({ title, content }) => (
  <div className='mb-16 text-center'>
    <div className='mb-4 ml-4 text-3xl leading-snug'>{title}</div>
    <div className='text-lg font-normal'>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </div>
);

export default Title;
