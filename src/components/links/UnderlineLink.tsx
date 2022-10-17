import * as React from 'react';

import clsxm from '@/lib/clsxm';

import Link, { UnstyledLinkProps } from '@/components/links/Link';

const UnderlineLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <Link
        ref={ref}
        {...rest}
        className={clsxm(
          'animated-underline custom-link inline-flex items-center font-medium',
          'focus:outline-none focus-visible:rounded focus-visible:text-primary focus-visible:ring focus-visible:ring-offset-2',
          'border-b border-dotted border-dark hover:border-black/0',
          className
        )}
      >
        {children}
      </Link>
    );
  }
);

export default UnderlineLink;
