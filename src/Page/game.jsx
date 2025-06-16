import React from 'react'
import ButtonGame from '../Component/buttongame'
import cross from '../assets/CombinedshapeCopy.png'
import circle from '../assets/Oval Copy.png'
import crossIcon from '../assets/cross.png'
import { GrPowerReset } from "react-icons/gr";

const Game = () => {
  return (
<main>
  <div className='flex justify-between'>
 <div className='flex mb-6'>
<img src={cross} alt="" />
<img src={circle} alt="" />
 </div>
 <button className='flex text-[#a8bfc9]  shadow-2xl gap-[10px] rounded-[5px]'>
     <img src={crossIcon} alt="" className='w-[20px] h-[20px]' /> <span className='font-semibold'>TURN</span> 
 </button>
 <button className='bg-[#a8bfc9] w-7 p-1.5 h-6 rounded-[5px]'><GrPowerReset /></button>
</div>
<div className='grid grid-cols-3 gap-[15px]'>
  <ButtonGame
   bg='rgba(47, 55, 70, 0.5)'
        shadow='0px 5px rgba(31, 29, 25, 0.5)'
         onClick={()=> setNewgame('cpu')}
          />
            <ButtonGame
   bg='rgba(47, 55, 70, 0.5)'
        shadow='0px 5px rgba(31, 29, 25, 0.5)'
         onClick={()=> setNewgame('cpu')}
          />
            <ButtonGame
   bg='rgba(47, 55, 70, 0.5)'
        shadow='0px 5px rgba(31, 29, 25, 0.5)'
         onClick={()=> setNewgame('cpu')}
          />
            <ButtonGame
   bg='rgba(47, 55, 70, 0.5)'
        shadow='0px 5px rgba(31, 29, 25, 0.5)'
         onClick={()=> setNewgame('cpu')}
          />
            <ButtonGame
   bg='rgba(47, 55, 70, 0.5)'
        shadow='0px 5px rgba(31, 29, 25, 0.5)'
         onClick={()=> setNewgame('cpu')}
          />
            <ButtonGame
   bg='rgba(47, 55, 70, 0.5)'
        shadow='0px 5px rgba(31, 29, 25, 0.5)'
         onClick={()=> setNewgame('cpu')}
          />
            <ButtonGame
   bg='rgba(47, 55, 70, 0.5)'
        shadow='0px 5px rgba(31, 29, 25, 0.5)'
         onClick={()=> setNewgame('cpu')}
          />
            <ButtonGame
   bg='rgba(47, 55, 70, 0.5)'
        shadow='0px 5px rgba(31, 29, 25, 0.5)'
         onClick={()=> setNewgame('cpu')}
          />
            <ButtonGame
   bg='rgba(47, 55, 70, 0.5)'
        shadow='0px 5px rgba(31, 29, 25, 0.5)'
         onClick={()=> setNewgame('cpu')}
          />
</div>
<div className='flex justify-between mt-4 w-100' >
<button className='bg-[#F2B137] p-[3px] rounded-[10px] w-[100px] h-[70px]'>
   X (YOU)
 <h3 className='font-bold items-center'>0</h3> 
</button>
<button className='bg-[#a8bfc9] p-[3px] rounded-[10px] w-[100px] h-[70px]'>
  TIES
  <h3 className='font-bold'>0</h3>
</button>
<button className='bg-[#31C3BD] p-[3px] rounded-[10px] w-[100px] h-[70px]'>
  O (CPU)
 <h3 className='font-bold'>0</h3>
</button>
</div>
</main>
  )
}

export default Game