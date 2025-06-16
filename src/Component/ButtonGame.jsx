import React from 'react'

const ButtonGame = ({onClick, bg, shadow}) => {
  return (
    <button
     type='button'
    onClick={onClick}  
    className={`p-[55px] border-none flex items-center rounded-[5px] justify-center cursor-pointer w-full`}
    style={{
      backgroundColor: bg,
      boxShadow: shadow,
    }}>
    </button>

  )
}

export default ButtonGame