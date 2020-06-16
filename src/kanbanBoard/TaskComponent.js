import React from 'react';
import styled from 'styled-components';
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardItem = styled.div`
    &:hover{
        background-color: #F4F3F2;
        transform: scale(1.02);
        transition: all 0.1s ease;
    }
    &:active{
        transform: scale(1.02) rotate(2deg);
    }
    box-shadow:0 1px 0 rgba(9,30,66,.25);
    position:relative;
    border-radius:3px;
    background-color: white;
    min-height:20px;
    padding: 8px;
    margin:8px;
`;
const TaskCard = ({ task=[] }) => {
    const content = (
        <CardItem
            draggable="true"
            // onDragStart = {(e) => e.dataTransfer.setData("taskId", task.id)}
        >
            <div>
                <span>{ task.task }</span>
            </div>  
        </CardItem>
    )
    return content;
};

export default TaskCard;