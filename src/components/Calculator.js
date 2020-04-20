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


    const verify = (ev)=>{
        const card1= document.getElementById("board-1").childNodes[0].getAttribute("value");
        const card2= document.getElementById("board-2").childNodes[0].getAttribute("value");
        const card3= document.getElementById("board-3").childNodes[0].getAttribute("value");
        const card4= document.getElementById("board-4").childNodes[0].getAttribute("value");
        const card5= document.getElementById("board-5").childNodes[0].getAttribute("value");
        const card6= document.getElementById("board-6").childNodes[0].getAttribute("value");
        const card7= document.getElementById("board-7").childNodes[0].getAttribute("value");
        const card8= document.getElementById("board-8").childNodes[0].getAttribute("value");
        const card9= document.getElementById("board-9").childNodes[0].getAttribute("value");
        if(card1=="5" && card2=="2" && card3=="1" && card4=="4" && card5=="3" &&card6=="8" && card7=="9" && card8=="6" && card9=="7" ){
            setsomme("perfect");
        }
        else{
            setsomme("the caclculator is still broken");
        }



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
                    <Card id="card-1" className="card" draggable="true" idblock="board-1" onClick={onClick} value="1">
                        1
                    </Card>
                </Board>
                <Board id="board-2" className="board">
                    <Card id="card-2" className="card" draggable="true" idblock="board-2" onClick={onClick} value="2">
                        2
                    </Card>
                </Board>
                <Board id="board-3" className="board">
                    <Card id="card-3" className="card" draggable="true" idblock="board-3" onClick={onClick} value="3">
                        3
                    </Card>
                </Board>
            </main>
            <br/>
            <main className="flexbox">
                <Board id="board-4" className="board">
                    <Card id="card-4" className="card" draggable="true" idblock="board-4" onClick={onClick} value="4">
                        4
                    </Card>
                </Board>
                <Board id="board-5" className="board">
                    <Card id="card-5" className="card" draggable="true" idblock="board-5" onClick={onClick} value="5">
                        5
                    </Card>
                </Board>
                <Board id="board-6" className="board">
                    <Card id="card-6" className="card" draggable="true" idblock="board-6" onClick={onClick} value="6">
                        6
                    </Card>
                </Board>
            </main>
            <br/>
            <main className="flexbox">
                <Board id="board-7" className="board">
                    <Card id="card-7" className="card" draggable="true" idblock="board-7" onClick={onClick} value="7">
                        7
                    </Card>
                </Board>
                <Board id="board-8" className="board">
                    <Card id="card-8" className="card" draggable="true" idblock="board-8" onClick={onClick} value="8">
                        8
                    </Card>
                </Board>
                <Board id="board-9" className="board">
                    <Card id="card-9" className="card" draggable="true" idblock="board-9" onClick={onClick} value="9">
                        9
                    </Card>
                </Board>
            </main>

            <button onClick={add} >+</button>
            <button onClick={result}>=</button>
            <button onClick={verify}>verify</button>
        </div>
    );
}

export default Calculator;
