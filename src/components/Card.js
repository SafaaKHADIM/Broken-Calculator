import React, {useState} from 'react';

function Card (props) {


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





    return(
        <button id={props.id}
             className={props.className}
             draggable={props.draggable}
             onDragStart={dragStart}
             onDragOver={DragOver}
             idblock={props.idblock}
             onClick={props.onClick1}

        >
            {props.children}
        </button>
    )
}

export default Card;