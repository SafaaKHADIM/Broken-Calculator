import React from 'react';

import './App.css';
import Board from "./components/Board";
import Card from "./components/Card";
import Display from "./components/Display";
import Calculator from "./components/Calculator";
import Header from "./components/header/header";

function App() {
  return (
      <div>
      <Header/>
     <Calculator/>
      </div>
  );
}

export default App;
