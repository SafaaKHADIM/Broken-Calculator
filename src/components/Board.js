import React, {Component} from 'react';

function Board (props) {

    const drop= ev =>{
        ev.preventDefault();

        const card_id= ev.dataTransfer.getData("card_id");
        const card_1 = document.getElementById(card_id);
        const board_id_1= ev.dataTransfer.getData("board_id");
        const board_1 = document.getElementById(board_id_1);

        if(ev.currentTarget.getAttribute("class")=="board"){
            console.log("a");
            ev.currentTarget.appendChild(card_1);
            card_1.setAttribute("idblock", ev.currentTarget.getAttribute("id"));
        }
        if(ev.currentTarget.getAttribute("class")=="card"){
            console.log("b");
            ev.currentTarget.parentNode.appendChild(card_1);
        }


        let card_2= ev.currentTarget.childNodes[0];
        card_2.setAttribute("idblock", board_1.getAttribute("id"));
        board_1.appendChild(card_2);


    }



    const DragOver = (ev) => {
        ev.preventDefault();
    }
    return(
        <div id={props.id}
             className={props.className}
             onDrop={drop}
             onDragOver={DragOver}
        >
            {props.children}
        </div>
    )
}

export default Board;