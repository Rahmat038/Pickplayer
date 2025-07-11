import React from 'react'

const ButtonComp = ({text, bg, shadow, onClick}) => {
  return (
    <button 
    type= 'button' 
    onClick= {onClick}
    className={`p-[10px] borber-none flex items-center justify-center text-[#1a2a33] font-bold text-sm cursor-ponter rounded-[10px] w-full`}
    style= {{
      backgroundColor: bg,
      boxShadow: shadow,
      
      
    }}>
     {text}
    </button>
  )
}

export default ButtonComp