import React from 'react';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import TaskCard from "./TaskComponent";
import { connect } from 'react-redux'
import { getTasksForList, getVisibleNewCard } from './selectors'
import NewTaskCard from './NewTaskCardComponent'

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
`;
const ListContainer = styled.div`
    
    background-color:#e9e6e6;
    width: 230px;
    max-height:100%;
    border-radius: 4px;
    box-shadow: 0 4px 8px grey;
    /* position:relative; */
    display:flex;
    flex-direction:column;
`;
const CardDeck = styled.div`
    overflow-y: scroll;
    overflow-x: hidden;
    /* max-height:80vh;     */
`;
const CardCreatorDiv = styled.div`
    height: 38px;
    display: flex;
    align-items:center;
`;
const CardCreatorButton = styled.button`
    &:hover{
        background-color: lightgray;
    }
    padding:10px;
    border:0ch;    
    background-color:#e9e6e6;
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
    onDeleteTaskPressed,}) => {
    const content = (
        <TaskListWrapper>
            <ListContainer draggable="true">
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
                <CardDeck>
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