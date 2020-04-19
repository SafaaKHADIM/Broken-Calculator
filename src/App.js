import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from "./components/Board";
import Card from "./components/Card";

function App() {
  return (
      <div className="App">
        <main className="flexbox">
          <Board id="board-1" className="board">
            <Card id="card-1" className="card" draggable="true" idblock="board-1">
              <button>card 1</button>
            </Card>
          </Board>
          <Board id="board-2" className="board">
            <Card id="card-2" className="card" draggable="true" idblock="board-2">
              <button>card 2</button>
            </Card>
          </Board>
        </main>
      </div>
  );
}

export default App;
