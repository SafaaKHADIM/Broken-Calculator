import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from "./components/Board";
import Card from "./components/Card";
import Display from "./components/Display";

function App() {
  return (
      <div className="App">
          <br/><br/><br/>
          <Display className="box"></Display>
          <br/>
        <main className="flexbox">
          <Board id="board-1" className="board">
            <Card id="card-1" className="card" draggable="true" idblock="board-1">
               1
            </Card>
          </Board>
          <Board id="board-2" className="board">
            <Card id="card-2" className="card" draggable="true" idblock="board-2">
               2
            </Card>
          </Board>
          <Board id="board-3" className="board">
            <Card id="card-3" className="card" draggable="true" idblock="board-3">
                3
            </Card>
          </Board>
        </main>
          <br/>
          <main className="flexbox">
              <Board id="board-4" className="board">
                  <Card id="card-4" className="card" draggable="true" idblock="board-4">
                       4
                  </Card>
              </Board>
              <Board id="board-5" className="board">
                  <Card id="card-5" className="card" draggable="true" idblock="board-5">
                     5
                  </Card>
              </Board>
              <Board id="board-6" className="board">
                  <Card id="card-6" className="card" draggable="true" idblock="board-6">
                     6
                  </Card>
              </Board>
          </main>
          <br/>
          <main className="flexbox">
              <Board id="board-7" className="board">
                  <Card id="card-7" className="card" draggable="true" idblock="board-7">
                     7
                  </Card>
              </Board>
              <Board id="board-8" className="board">
                  <Card id="card-8" className="card" draggable="true" idblock="board-8">
                   8
                  </Card>
              </Board>
              <Board id="board-9" className="board">
                  <Card id="card-9" className="card" draggable="true" idblock="board-9">
                      9
                  </Card>
              </Board>
          </main>
      </div>
  );
}

export default App;
