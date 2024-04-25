import React from 'react';
import Button from './Button';
import Image from 'next/image';
import AlertIcon from './AlertIcon';

type Props = {};

const ConfidenceLevel = (props: Props) => {
  return (
    <div className='inline-flex font-semibold text-accent-light bg-white'>
      <Button className='rounded-e-none text-base p-1.5'>
        <AlertIcon color='#F0671A' />
        Not Confident
      </Button>
      <Button className='border-l-0 rounded-s-none text-base p-1.5'>
        Human Help
        <Image src='/arrow.svg' height={20} width={20} alt='alert icon' />
      </Button>
    </div>
  );
};

export default ConfidenceLevel;
