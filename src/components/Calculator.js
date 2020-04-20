import React, {useState} from 'react';
import '../App.css';
import Board from "./Board";
import Card from "./Card";
import Display from "./Display";

function Calculator() {
    const [firstNumber, setfirstNumber] = useState(0);
    const [secondNumber, setsecondNumber] = useState(0);
    const [somme, setsomme] = useState(0);



    const onClick = (ev)=>{
        let number = "";
        const value = ev.currentTarget.getAttribute("idblock");
        setsomme ( 0);


        switch(value) {
            case "board-1":
                number =number+"5";
                break;
            case "board-2":
                number =number+"2";
                break;
            case "board-3":
                number =number+"1";
                break;
            case "board-4":
                number =number+"4";
                break;
            case "board-5":
                number =number+"3";
                break;
            case "board-6":
                number =number+"8";
                break;
            case "board-7":
                number =number+"9";
                break;
            case "board-8":
                number =number+"6";
                break;
            case "board-9":
                number =number+"7";
                break;

            default:
                number =number;
        }
        setfirstNumber(firstNumber+number);


    }
    const add =()=>{
        setsecondNumber(firstNumber);
        setfirstNumber("0");
    }

    const result = () =>{
        setsomme ( Number(firstNumber) +Number(secondNumber));
        setfirstNumber(0);
        setsecondNumber(0);
    }


    return (
        <div className="App">
            <br/><br/><br/>
            <Display className="box">{somme}</Display>
            <br/>
            <main className="flexbox">
                <Board id="board-1" className="board">
                    <Card id="card-1" className="card" draggable="true" idblock="board-1" onClick={onClick}>
                        1
                    </Card>
                </Board>
                <Board id="board-2" className="board">
                    <Card id="card-2" className="card" draggable="true" idblock="board-2" onClick={onClick}>
                        2
                    </Card>
                </Board>
                <Board id="board-3" className="board">
                    <Card id="card-3" className="card" draggable="true" idblock="board-3" onClick={onClick}>
                        3
                    </Card>
                </Board>
            </main>
            <br/>
            <main className="flexbox">
                <Board id="board-4" className="board">
                    <Card id="card-4" className="card" draggable="true" idblock="board-4" onClick={onClick}>
                        4
                    </Card>
                </Board>
                <Board id="board-5" className="board">
                    <Card id="card-5" className="card" draggable="true" idblock="board-5" onClick={onClick}>
                        5
                    </Card>
                </Board>
                <Board id="board-6" className="board">
                    <Card id="card-6" className="card" draggable="true" idblock="board-6" onClick={onClick}>
                        6
                    </Card>
                </Board>
            </main>
            <br/>
            <main className="flexbox">
                <Board id="board-7" className="board">
                    <Card id="card-7" className="card" draggable="true" idblock="board-7" onClick={onClick}>
                        7
                    </Card>
                </Board>
                <Board id="board-8" className="board">
                    <Card id="card-8" className="card" draggable="true" idblock="board-8" onClick={onClick}>
                        8
                    </Card>
                </Board>
                <Board id="board-9" className="board">
                    <Card id="card-9" className="card" draggable="true" idblock="board-9" onClick={onClick}>
                        9
                    </Card>
                </Board>
            </main>

            <button onClick={add} >+</button>
            <button onClick={result}>=</button>
        </div>
    );
}

export default Calculator;
