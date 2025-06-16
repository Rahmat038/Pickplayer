import React, { useState } from "react";
import crossIcon from "../assets/CombinedShapecopy.png";
import circleIcon from "../assets/Oval Copy.png";
import cross from "../assets/cross.png";
import circle from "../assets/circle.png";
import ButtonComp from "../Component/ButtonComp";
import { Link } from "react-router-dom";

const SelectPlayer = () => {
  const [playerOneMark, setPlayerOneMark] = useState('x');
  const [newGame, setNewGame] = useState('PLAYER');

  // const handlePlayerOneMark = (player) =>{
  //   setPlayerOneMark(player)
  // };
  return (
    <main className="w-full lg:w-[375px] max-width-[375px] h-auto mx-auto flex flex-col items-center justify-center gap-[24px]">
      <div className="flex items-center justify-center gap-1">
        <img src={crossIcon} alt="crossIcon" />
        <img src={circleIcon} alt="cirlceIcon" />
      </div>
      <section
        className="bg-[#1F3641] rounded-[15px] h-auto flex flex-col items-center gap-2 p-[10px]"
        style={{
          boxShadow: "05px rgba(0, 0, 0.5)",
        }}
      >
        <h2 className="text-[#a8bfc9] text-[1.5rem] font-bold">
          PICK {newGame} MARK
        </h2>
        <div className="bg-[#1a2a33] p-[10px] flex items-center justify-between rounded-[15px] w-full">
          <button
          type= 'button'
         onClick ={() => setPlayerOneMark('x')} 
         className={`w-[45%] p-[10px] ${
          playerOneMark =='x' ? 'bg-[#a8bfc9]' : 'bg-none'} bg-none border-none flex items-center justify-center cursor-pointer hover:bg-[#1F3641] hover:shadow-[0_5px_0_rgba(0,0,0,0.25)] rounded- 10px`}>
            <img src={cross} alt="cross" />
          </button>
          <button
          type= 'button'
          onClick = {() => setPlayerOneMark('o')}
           className={`w-[45%] p-[10px] ${
            playerOneMark == 'o' ? 'bg-[#a8bfc9]' : 'bg-none'} bg-none border-none flex items-center justify-center cursor-pointer hover:bg-[#1F3641] hover:shadow-[0_5px_0_rgba(0,0,0,0.25)] rounded- 10px`}>
            <img src={circle} alt="circle" />
          </button>
        </div>
        <h3 className="text-[#a8bfc9] text-base font-semibold">
          Remember: <span className="capitalized">{playerOneMark}</span>goes first
        </h3>
      </section>
      <div className="flex flex-col w-full gap-4">
        <Link to='game'>
         <ButtonComp
          text="NEW GAME (VS CPU)"
          bg="#F2B137"
          shadow="0px, 5px, rgba(242,177, 55, 0.5"
          onClick={() => setNewGame('CPU')}
        />
        </Link>
       <Link to='game'>
          <ButtonComp
          text="NEW GAME (VS PLAYER)"
          bg="#31C3BD"
          shadow="0px, 5px, rgba(49, 195, 189, 0.5)"
          onClick={() => setNewGame('PLAYER')}
        />
        </Link>
     
      </div>
    </main>
  );
};

export default SelectPlayer;
