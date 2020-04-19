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
              <button> 1</button>
            </Card>
          </Board>
          <Board id="board-2" className="board">
            <Card id="card-2" className="card" draggable="true" idblock="board-2">
              <button> 2</button>
            </Card>
          </Board>
          <Board id="board-3" className="board">
            <Card id="card-3" className="card" draggable="true" idblock="board-3">
                <button> 3</button>
            </Card>
          </Board>
        </main>
          <br/>
          <main className="flexbox">
              <Board id="board-4" className="board">
                  <Card id="card-4" className="card" draggable="true" idblock="board-4">
                      <button> 4</button>
                  </Card>
              </Board>
              <Board id="board-5" className="board">
                  <Card id="card-5" className="card" draggable="true" idblock="board-5">
                      <button> 5</button>
                  </Card>
              </Board>
              <Board id="board-6" className="board">
                  <Card id="card-6" className="card" draggable="true" idblock="board-6">
                      <button> 6</button>
                  </Card>
              </Board>
          </main>
          <br/>
          <main className="flexbox">
              <Board id="board-7" className="board">
                  <Card id="card-7" className="card" draggable="true" idblock="board-7">
                      <button> 7</button>
                  </Card>
              </Board>
              <Board id="board-8" className="board">
                  <Card id="card-8" className="card" draggable="true" idblock="board-8">
                      <button> 8</button>
                  </Card>
              </Board>
              <Board id="board-9" className="board">
                  <Card id="card-9" className="card" draggable="true" idblock="board-9">
                      <button> 9</button>
                  </Card>
              </Board>
          </main>
      </div>
  );
}

export default App;
