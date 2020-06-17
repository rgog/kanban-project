import React from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd'
import { ItemTypes} from '../Utils/Items'

const CardItem = styled.div`
    &:hover{
        background-color: #F4F3F2;
        transform: scale(1.02);
        transition: all 0.1s ease;
    }
    box-shadow:0 1px 0 rgba(9,30,66,.25);
    position:relative;
    border-radius:3px;
    background-color: white;
    min-height:20px;
    padding: 8px;
    margin:8px;
`;

const DeleteCardDiv = styled.div`
    cursor: pointer;
`;

const TaskCard = ({ task=[], onDeleteTaskPressed }) => {
    const [{ isDragging }, drag] = useDrag({
        item: {
            type: ItemTypes.CARD,
            id: task.task,
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })
    const content = (
        <CardItem
        ref= { drag }
        // opacity={isDragging? '0.1':'1'}
        // transform= {isDragging? 'scale(1.02) rotate(2deg)':'scale(1)'}
            // onDragStart = {(e) => e.dataTransfer.setData("taskId", task.id)}
        >
            <DeleteCardDiv
            onClick={() => {
                onDeleteTaskPressed(task)
            }}>
                <span className="close">
                        x
                </span>
            </DeleteCardDiv>
            <div>
                <span>{ task.task }</span>
            </div>  
        </CardItem>
    )
    return content;
};

export default TaskCard;