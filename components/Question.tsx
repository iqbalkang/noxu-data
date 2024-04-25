import Image from 'next/image';
import ContainerCenter from './ContainerCenter';

type Props = {};

const Question = (props: Props) => {
  return (
    <section className='bg-white py-8'>
      <ContainerCenter flex>
        <Image src='/avatar.png' height={40} width={40} alt='avatar image' />
        <p>List my top 10 accounts</p>
      </ContainerCenter>
    </section>
  );
};

export default Question;
