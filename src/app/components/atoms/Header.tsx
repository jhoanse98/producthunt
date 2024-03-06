import React from 'react'
import Buscador from '../../ui/Buscador'
import Navigation from './Navigation'
import Link from 'next/link'
import Button from '@/app/ui/Button'

const Header = () => {
  const usuario = false;
  return (
    <header className='border-b-2 border-solid border-gris3 py-4 px-20'>
        <div className=' max-w-1200px w-19/20 my-0 mx-auto min-[768px]:flex min-[768px]:justify-between '>
            <div className='flex items-center'>
              <Link href={'/'}>
                <p className=' text-naranja font-roboto_slab text-4xl/8 mr-8 font-bold'>P</p>
              </Link>
                <Buscador />
                <Navigation />
            </div>

            <div className='flex justify-center items-center gap-4'>
              {usuario ? (
                <>
                  <p className='font-poppins'>hola: Sebas</p>
                  <Button color='red'>Cerrar sesión</Button>
                </>
              ) : (
              <>
                <Link href={"/login"}>
                  <Button color='red'>
                    Login
                  </Button>
                </Link>
                <Link href={"/crear-cuenta"}>
                  <Button>
                    Crear cuenta
                  </Button>
                </Link>
              </>
              ) }
            </div>
        </div>
    </header>
  )
}

export default Header
