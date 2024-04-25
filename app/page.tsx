import Answer from '@/components/Answer';
import Chat from '@/components/Chat';
import Question from '@/components/Question';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Question />
      <Answer />
      <Chat />
    </>
  );
}
