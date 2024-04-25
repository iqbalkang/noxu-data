import React from 'react';
import ContainerCenter from './ContainerCenter';
import ConfidenceLevel from './ConfidenceLevel';
import Image from 'next/image';
import Table from './Table';

type Props = {};

const Answer = (props: Props) => {
  return (
    <section className='bg-slate-100 py-8'>
      <ContainerCenter className='space-y-4'>
        <ConfidenceLevel />

        <div className='grid grid-cols-[auto,auto] items-center gap-4'>
          <Image src='/logo-mark.svg' height={40} width={40} alt='logo-mark' />
          <p>To find out how many accounts you have, you can use the following query:</p>

          <Table />
        </div>
      </ContainerCenter>
    </section>
  );
};

export default Answer;
