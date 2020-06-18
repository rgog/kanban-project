import React from 'react';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import TaskCard from "./TaskComponent";
import { connect } from 'react-redux'
import { getTasksForList, getVisibleNewCard } from './selectors'
import NewTaskCard from './NewTaskCardComponent'
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../Utils/Items';

const TaskListWrapper = styled.div`
    margin:0 10px;
    padding: 8px;
    width: 230px;
`;
const ListHeaderText = styled.b`
    padding: 8px;
`;
const ListHeaderDiv = styled.div`
    height: 38px;
    display: flex;
    justify-content: space-between;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`;
const ListContainer = styled.div`
    
    background-color:#cac6c2c9;
    width: 230px;
    max-height:100%;
    border-radius: 4px;
    box-shadow: 0px 0px 5px 1px grey;
    /* position:relative; */
    display:flex;
    flex-direction:column;
`;
const CardDeck = styled.div`
    overflow-y: scroll;
    overflow-x: hidden;
    min-height:50px;
    box-shadow: inset 0px 0px 6px 3px #8080808a;
`;
const CardCreatorDiv = styled.div`
    height: 38px;
    display: flex;
    align-items:center;
`;
const CardCreatorButton = styled.button`
    &:hover{
        background-color: #9c9c9c;
    }
    padding:7px;
    border:0ch;    
    background-color:#cac6c2c9;
    width: 100%;
    text-align: left;
`;

const DeleteListDiv = styled.div`
    cursor: pointer;
    padding: 2px 4px;
    /* transform: translate(0%, -50%); */
`;


const TaskContainer = ({
    listName,
    tasks=[], 
    onCreatePressed,
    onAddTaskPressed,
    onCancelPressed,
    showNewCardType,
    onDeleteListPressed,
    deleteTasksForList,
    onDeleteTaskPressed,
    onStatusUpdate}) => {
        const[{isOver}, drop] = useDrop({
            accept: ItemTypes.CARD,
            drop: (item, monitor) => onStatusUpdate(item.id, listName),
            collect: monitor => ({
                isOver: !!monitor.isOver(),
            }),
        });
    const content = (
        <TaskListWrapper>
            <ListContainer className='ListContainer'draggable="true">
                <ListHeaderDiv>
                    <ListHeaderText>
                        { listName }
                    </ListHeaderText>
                    <DeleteListDiv
                    onClick={() => {
                        onDeleteListPressed(listName)
                        deleteTasksForList(listName)
                    }}>
                        <span className="close">
                                x
                        </span>
                    </DeleteListDiv>
                </ListHeaderDiv>
                <CardDeck 
                ref= {drop}
                bg= {isOver ? 'Green' : 'Yellow'}>
                    { tasks.map(task => <TaskCard 
                    task= { task }
                    onDeleteTaskPressed={onDeleteTaskPressed}/>)}
                    { showNewCardType===listName ?  
                    <NewTaskCard
                        status = { listName }
                        onCreatePressed = { onCreatePressed }
                        onCancelPressed = { onCancelPressed }/>:
                        null
                    }
                </CardDeck>
                <CardCreatorDiv>
                    <CardCreatorButton
                        onClick = {() => 
                                onAddTaskPressed(listName)}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                        <b>Add New Task</b>
                    </CardCreatorButton>
                </CardCreatorDiv>
            </ListContainer>
        </TaskListWrapper>
    );
    return content;
};

const mapStateToProps = (state, ownProps) => ({
    tasks: getTasksForList(state, ownProps.listName),
    showNewCardType: getVisibleNewCard(state),
});


export default connect(mapStateToProps)(TaskContainer);