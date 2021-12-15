import React from 'react';
import Api from './components/Api';
import Navbar from './components/navbar';


import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Descripiton from './components/Descripition';


function App() {
 
  return (
    <>
      <h1>MyAnimeList</h1>
        <div className="flex-container">
            <Router>
            <div className="navbar">
              <Navbar/>
            </div>
            <div className="app-container">
            <Routes>
            <Route path="/" element={<Api parm0="top" parm2="anime" parm1="1" arr="top"/>} />
            <Route path="/:parm1/:parm2" element={<Api parm0="season" arr="anime"/>} />
            <Route path="/:id" exect element={<Descripiton />} />
            </Routes>
            </div>
            </Router>
      </div>
    </>
  );
}

export default App;
