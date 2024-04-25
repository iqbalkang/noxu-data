import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className='flex items-center justify-between px-5 py-3 shadow-gray-100 shadow-lg border border-gray-300 my-6 rounded-full'>
      <Link href='/'>
        <Image src='/logo.svg' alt='company logo' width={165} height={165} />
      </Link>
      <Link href='/readme' className='bg-slate-900 text-white px-6 py-1.5 rounded-full'>
        Read Me
      </Link>
    </nav>
  );
};

export default Navbar;
