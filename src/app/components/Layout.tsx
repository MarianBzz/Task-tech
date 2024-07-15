'use client';
import Image from 'next/image';
import React from 'react';

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className='flex h-screen w-full flex-col'>
      <header className='sticky top-0 z-10 flex items-center justify-between bg-red-500 p-4 text-white'>
        <div className='flex items-center space-x-4'>
          <button className='rounded-lg p-2 hover:bg-red-600'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>
          <h1 className='text-2xl font-bold'>TaskTech</h1>
        </div>
        <div className='flex items-center space-x-4'>
          <Image
            src='/messi.jpg'
            alt='Profile Image'
            width={100}
            height={100}
            className='h-10 w-10 rounded-full object-cover'
          />
        </div>
      </header>
      <main className='flex flex-1 flex-col bg-gray-100 px-2 pt-1'>
        {children}
      </main>
    </div>
  );
};

export default Layout;
