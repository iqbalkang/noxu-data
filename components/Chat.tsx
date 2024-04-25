import React from 'react';
import ContainerCenter from './ContainerCenter';
import Image from 'next/image';
import Button from './Button';

type Props = {};

const Chat = (props: Props) => {
  return (
    <section className='bg-white pt-4 pb-8'>
      <ContainerCenter className='space-y-4'>
        <div className='flex gap-4'>
          <Button>Suggestion question 1</Button>
          <Button>Suggestion question 2</Button>
          <Button>Suggestion question 3</Button>
        </div>

        <div className='flex justify-between gap-4'>
          <div className='flex flex-1'>
            <Button className='text-base rounded-e-none'>
              <Image src='/message.svg' height={24} width={24} alt='message icon' />
              <span>Chat</span>
              <Image src='/chevrons.svg' height={16} width={16} alt='chevron icon' />
            </Button>

            <div className='w-full h-full relative'>
              <input
                type='text'
                placeholder='Start a new chat'
                className=' w-full h-full outline-none px-3 border rounded-md overflow-hidden rounded-s-none border-s-0'
              />
              <Image
                src='/send.svg'
                height={24}
                width={24}
                className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer'
                alt='send icon'
              />
            </div>
          </div>
          <Button className='text-accent-dark border-accent-dark'>End Chat</Button>
        </div>
      </ContainerCenter>
    </section>
  );
};

export default Chat;
