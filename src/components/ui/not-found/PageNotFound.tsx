import Link from 'next/link';

import { titleFont } from '@/config/fonts'
import Image from 'next/image';

export const PageNotFound = () => {
  return (
    <div
      className='w-full h-full flex flex-col items-center justify-center
      py-10 align-middle overflow-x-auto'
    >
      <div className='text-center px-5 mx-5'>
        <h2 className={`${titleFont.className} antialiased text-9xl`}>
          404
        </h2>

        <p className='text-xl font-semibold'>Whoops! lo sentimos mucho</p>
        <p className='font-light'>
          <span>Puedes regresar al </span>
          <Link
            href='/'
            className='font-normal transition-all hover:underline'
          >
            Inicio
          </Link>
        </p>
      </div>

      <div className='px-5 mx-5'>
        <Image
          src="/imgs/starman_750x750.png"
          alt="Starman"
          width={300}
          height={300}
          className='p-5 sm:p-0'
        />
      </div>
    </div>
  )
}
