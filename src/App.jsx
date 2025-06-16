// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { Route, Routes } from "react-router-dom";
import SelectPlayer from "./Page/selectPlayer";
import Game from './Page/game'

function App() {
  return (
    <main className="w-full h-screen bg-[#282c34] flex items-center justify-center mx-auto">
      <Routes>
       < Route path='select-player' element={ <SelectPlayer />} />
       <Route path='game' element={ <Game />}></Route>
      </Routes>
    </main>
  );
}

export default App;
