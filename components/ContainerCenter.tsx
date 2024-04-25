import { cn } from '@/utils/helperFunctions';
import React from 'react';

type ButtonVariants = {
  flex?: boolean;
  flexCol?: boolean;
};

type Props = React.HTMLProps<HTMLDivElement> & ButtonVariants;

const ContainerCenter = (props: Props) => {
  const { flex, flexCol, className, ...restProps } = props;

  const containerClasses = cn(
    'w-[800px] mx-auto',
    { 'flex items-center gap-4': flex },
    { 'flex flex-col justify-center gap-4': flexCol },
    className
  );

  return <div {...restProps} className={containerClasses} />;
};

export default ContainerCenter;
