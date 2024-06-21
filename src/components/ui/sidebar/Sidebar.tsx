'use client';

import Link from 'next/link';

import clsx from 'clsx';

import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline
} from 'react-icons/io5';

import { useUIStore } from '@/store';


export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

  return (
    <div>
      { isSideMenuOpen && (
        <div
          className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30'
        />
      )}

      { isSideMenuOpen && (
        <div
          onClick={() => closeMenu()}
          className='fixed top-0 left-0 w-screen h-screen z-10 fade-in backdrop-filter backdrop-blur-sm'
        />
      )}


      <nav
        className={
          clsx(
            `fixed top-0 right-0 w-[500px] h-screen p-5 z-20 bg-white shadow-2xl
            transform transition-all duration-300 overflow-y-auto`,
            { 'translate-x-full': !isSideMenuOpen }
          )
        }
      >
        <IoCloseOutline
          size={44}
          className='absolute top-5 right-5 cursor-pointer'
          onClick={() => closeMenu()}
        />

        <div className='relative mt-10'>
          <IoSearchOutline size={20} className='absolute top-2 left-2' />
          <input
            type='text'
            placeholder='Buscar...'
            className='w-full px-10 py-1 border-b-2 border-gray-200 rounded text-lg
            focus:outline-none focus:border-blue-500'  
          />
        </div>

        <Link
          href='/'
          className='flex items-center p-2 mt-4 rounded transition-all hover:bg-gray-100'
        >
          <IoPersonOutline size={30} />
          <span className='ml-3 text-lg'>Perfil</span>
        </Link>

        <Link
          href='/'
          className='flex items-center p-2 mt-4 rounded transition-all hover:bg-gray-100'
        >
          <IoTicketOutline size={30} />
          <span className='ml-3 text-lg'>Ordenes</span>
        </Link>

        <Link
          href='/'
          className='flex items-center p-2 mt-4 rounded transition-all hover:bg-gray-100'
        >
          <IoLogInOutline size={30} />
          <span className='ml-3 text-lg'>Ingresar</span>
        </Link>

        <Link
          href='/'
          className='flex items-center p-2 mt-4 rounded transition-all hover:bg-gray-100'
        >
          <IoLogOutOutline size={30} />
          <span className='ml-3 text-lg'>Salir</span>
        </Link>

        <div className='w-full h-px my-4 bg-gray-200'></div>

        <Link
          href='/'
          className='flex items-center p-2 mt-4 rounded transition-all hover:bg-gray-100'
        >
          <IoShirtOutline size={30} />
          <span className='ml-3 text-lg'>Productos</span>
        </Link>

        <Link
          href='/'
          className='flex items-center p-2 mt-4 rounded transition-all hover:bg-gray-100'
        >
          <IoTicketOutline size={30} />
          <span className='ml-3 text-lg'>Ordenes</span>
        </Link>

        <Link
          href='/'
          className='flex items-center p-2 mt-4 rounded transition-all hover:bg-gray-100'
        >
          <IoPeopleOutline size={30} />
          <span className='ml-3 text-lg'>Usuarios</span>
        </Link>
      </nav>
    </div>
  )
}
