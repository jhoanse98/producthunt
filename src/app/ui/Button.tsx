import React from 'react'

type Color= 'red' | 'white'

interface props{
    color?: Color;
    children: React.ReactNode;
}

const Button = ({color = 'white', children}: props) => {
    const colorVariants = {
        red: 'bg-color2',
        white: 'bg-white',
    }

    const colorText = {
        white: 'text-black',
        red: 'text-white',
    }
  return (
    <button className={`font-bold uppercase border-solid border border-color1 py-3 px-8 mr-4 last-of-type:mr-0 ${colorVariants[color]} ${colorText[color]} hover:cursor-pointer` } >
        {children}
    </button>
  )
}

export default Button
