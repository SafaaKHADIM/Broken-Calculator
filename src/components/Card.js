import React, {useState} from 'react';

function Card (props) {
    const [firstNumber, setfirstNumber] = useState(0);
    const [secondNumber, setsecondNumber] = useState(0);

    const dragStart= ev =>{
        const target= ev.target;
        let parent_board = ev.currentTarget.parentNode.getAttribute("id");
        ev.dataTransfer.setData("card_id",target.id);
        ev.dataTransfer.setData("board_id",parent_board);
        // setTimeout(()=>{
        //     target.style.display="none"
        //     },0)
    }

    const DragOver = (ev) => {
        ev.stopPropagation();
    }

    const onClick = (ev)=>{
        let number = "";
        const value = ev.currentTarget.getAttribute("idblock");
        switch(value) {
            case "block-1":
                number =number+"1";
                break;
            case "block-2":
                number =number+"2";
                break;
            case "block-3":
                number =number+"3";
                break;
            case "block-4":
                number =number+"4";
                break;
            case "block-5":
                number =number+"5";
                break;
            case "block-6":
                number =number+"6";
                break;
            case "block-7":
                number =number+"7";
                break;
            case "block-8":
                number =number+"8";
                break;
            case "block-9":
                number =number+"9";
                break;

            default:
                number =number;
        }
        setfirstNumber(firstNumber+number);
    }

    const add =()=>{
        setsecondNumber(firstNumber);
        setfirstNumber("");
    }

    const result = () =>{
      const somme=  Number(firstNumber) +Number(secondNumber);
    }

    return(
        <button id={props.id}
             className={props.className}
             draggable={props.draggable}
             onDragStart={dragStart}
             onDragOver={DragOver}
             idblock={props.idblock}

        >
            {props.children}
        </button>
    )
}

export default Card;