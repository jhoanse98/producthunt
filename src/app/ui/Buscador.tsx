import React from 'react'

const Buscador = () => {
  return (
    <form className=' relative'>
        <input type='text' className=' border border-solid border-gris3 p-4 min-w-80' placeholder='Buscar productos'/>
        <button type='submit' className=' h-12 w-12 block bg-16 bg-search-image absolute border-none right-4 top-1 indent-99'>Buscar</button>
    </form>
  )
}

export default Buscador
