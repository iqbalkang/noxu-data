import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'NoxuData | Empowering Business Teams with AI-Powered Data Analytics',
  description:
    'Discover NoxuData, the revolutionary data analytics platform designed for business teams. Experience seamless integration with AI-driven insights, easy dashboard creation, and secure, accurate data processing. Tailored for non-SQL users, NoxuData transforms complex data into actionable insights in seconds.',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} max-w-[1100px] mx-auto bg-[#f5f5f5] text-slate-900`}>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
