'use client';

import Link from 'next/link';

import { useUIStore } from '@/store';

import { titleFont } from '@/config/fonts';

import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';

export const TopMenu = () => {
  const openMenu = useUIStore((state) => state.openSideMenu);

  return (
    <nav
      className='w-full flex items-center justify-between px-5'
    >
      <div>
        <Link
          href='/'
        >
          <span
            className={`${titleFont.className} antialiased font-bold`}
          >
            Teslo
          </span>
          <span> | Shop</span>
        </Link>
      </div>

      <div
        className='hidden sm:block'
      >
        <Link
          href='/category/men'
          className='m-2 p-2 transition-all rounded-md hover:bg-gray-100'
        >
          Hombres
        </Link>
        <Link
          href='/category/women'
          className='m-2 p-2 transition-all rounded-md hover:bg-gray-100'
        >
          Mujeres
        </Link>
        <Link
          href='/category/kid'
          className='m-2 p-2 transition-all rounded-md hover:bg-gray-100'
        >
          Niños
        </Link>
      </div>

      <div
        className='flex items-center'
      >
        <Link href='/search' className='mx-2'>
          <IoSearchOutline className='size-5' />
        </Link>

        <Link href='/cart' className='mx-2'>
          <div className='relative'>
            <span
              className='absolute -top-2 -right-2 px-1 text-xs text-white font-bold
              rounded-full bg-blue-700'
            >
              3
            </span>
            <IoCartOutline className='size-5' />
          </div>
        </Link>

        <button
          className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
          onClick={openMenu}
        >
          Menú
        </button>
      </div>
    </nav>
  )
}
