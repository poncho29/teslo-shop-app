import { titleFont } from '@/config/fonts'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer
      className='w-full h-12 flex items-center justify-center gap-2 text-xs'
    >
      <Link href='/'>
        <span className={`${titleFont.className} antialiased font-bold`}>
          Teslo &nbsp;
        </span>
        <span>| shop</span>
        <span>© { new Date().getFullYear() }</span>
      </Link>

      <span>-</span>

      <Link
        href='/about'
      >
        Políticas de privacidad
      </Link>
    </footer>
  )
}
