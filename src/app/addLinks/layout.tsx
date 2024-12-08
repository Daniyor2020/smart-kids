import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className='h-screen w-64 bg-gray-800 text-white fixed'>
      <h2 className='text-2xl font-bold p-4 border-b border-gray-700'>
        Parent Dashboard
      </h2>
      <nav className='mt-4'>
        <ul>
          <li className='p-4 hover:bg-gray-700'>
            <Link href='/add-video'>Add Video</Link>
          </li>
          <li className='p-4 hover:bg-gray-700'>
            <Link href='/add-user'>Add User</Link>
          </li>
          <li className='p-4 hover:bg-gray-700'>
            <Link href='/'>View Videos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Header = () => {
  return (
    <header className=' flex items-center justify-between  text-white p-4   '>
      <h1 className='text-2xl font-bold '>Parent Dashboard</h1>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white p-4'>
      <p>&copy; 2023 Parent Dashboard</p>
    </footer>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Sidebar />
      <Header />
      <main className='ml-64 w-full'>{children}</main>
      <Footer />
    </div>
  );
}
