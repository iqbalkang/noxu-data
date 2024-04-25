import { cn } from '@/utils/helperFunctions';
import React from 'react';

type Props = React.HTMLProps<HTMLButtonElement>;

const Button = (props: Props) => {
  const { className, ...restProps } = props;

  const buttonClasses = cn(
    'flex items-center text-sm gap-1.5 py-2 px-4 border border-slate-300 shrink-0 rounded-md',
    className
  );

  return <button className={buttonClasses}>{restProps.children}</button>;
};

export default Button;
