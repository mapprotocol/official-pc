import classnames from 'classnames';

const SectionCardIcon = ({ bg, text, d }) => {
  const img = (
    <svg
      className='h-8 w-8'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d={d}
      ></path>
    </svg>
  );

  return (
    <div
      className={classnames(
        'mb-5 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full',
        bg,
        text
      )}
    >
      {img}
    </div>
  );
};

export default SectionCardIcon;
