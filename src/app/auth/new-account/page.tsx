import Link from 'next/link';

import { titleFont } from '@/config/fonts';

export default function NewAccountPage() {
  return (
    <main className="flex flex-col min-h-screen pt-12 sm:pt-24">
      <h1 className={ `${ titleFont.className } text-4xl mb-5` }>
        Nueva cuenta
      </h1>

      <div className="flex flex-col">
      <label htmlFor="name">Nombre completo</label>
        <input
          type="text"
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
        />
        
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
        />

        <label htmlFor="email">Contraseña</label>
        <input
          type="email"
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
        />

        <button
          className="btn-primary"
        >
          Crear cuenta
        </button>

        {/* divisor line */ }
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">O</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>

        <Link
          href="/auth/login" 
          className="btn-secondary text-center"
        >
          Ingresar
        </Link>
      </div>
    </main>
  );
}