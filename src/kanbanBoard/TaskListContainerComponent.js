import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TaskContainer from './TaskContainerComponent';
import img from '../assets/backgrounds/img1.jpg';
import { getLists } from './selectors';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    createList,
    deleteList,
    deleteTasksForList,
    updateNewcardVisibility,
    removeNewcardVisibility,
    createTask,
    deleteTask, } from './actions'

const ListWrapper = styled.div`
    padding: 8px;
    overflow-x:auto;
    overflow-y:hidden;
    display:flex;
    position: absolute;
    padding-bottom: 8px;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;
    background-image: url(${img});
    background-size: cover;
`;

const ListCreatorDiv = styled.div`
    margin:0 10px;
    padding: 8px;
    width: 230px;
`;

const ListCreatorInput = styled.input`
    width: 100%;
    min-width:200px;
    height: 40px;
    border-style: none;
    border-top-right-radius:4px;
    border-top-left-radius:4px;
    padding:8px;
`;
const ListCreatorButton = styled.button`
    width: 100%;
    height: 40px;
    border-style: none;
    border-top-right-radius:0px;
    border-top-left-radius:0px;
`;

const TaskListContainer = ({
    lists=[],
    onAddListPressed,
    onDeleteListPressed,
    deleteTasksForList,
    onAddTaskPressed,
    onCancelPressed,
    onCreatePressed,
    onDeleteTaskPressed}) => {
    const [inputValue, setInputValue] = useState('');
    const [placeHolder, setPlaceHolderValue] = useState("Enter List Name");
    const content = (
        <ListWrapper>
            {lists.map(list => <TaskContainer 
                listName={list} 
                onDeleteListPressed={onDeleteListPressed}
                deleteTasksForList={deleteTasksForList}
                onAddTaskPressed={onAddTaskPressed}
                onCancelPressed={onCancelPressed}
                onCreatePressed={onCreatePressed}
                onDeleteTaskPressed={onDeleteTaskPressed}/>)}
            <ListCreatorDiv>
                <ListCreatorInput
                    type="text"
                    placeholder = { placeHolder }
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}/>
                <ListCreatorButton
                    className="btn btn-success"
                    onClick = {() => {
                        if(!(inputValue==="")){
                            const isDuplicate = lists.some(list=>list.toLowerCase()===inputValue.trim().toLowerCase());
                            if(!isDuplicate){
                                onAddListPressed(inputValue.trim());
                                setInputValue('');
                            }
                            else{
                                setPlaceHolderValue('This list already exists!')
                                setInputValue('');
                            }
                        }
                    }}
                >
                    <FontAwesomeIcon className = "faIcon" icon={faPlus} />
                    <b>Add New List</b>
                </ListCreatorButton>
            </ListCreatorDiv>
        </ListWrapper>
    );
    return content;
};

const mapStateToProps = state => ({
    lists: getLists(state)
});

const dispatchStateToProps = dispatch => ({
    onAddListPressed: text => dispatch(createList(text)),
    onDeleteListPressed: listName => dispatch(deleteList(listName)),
    onCreatePressed: (text, status) => dispatch(createTask(text, status)),
    deleteTasksForList: listName => dispatch(deleteTasksForList(listName)),
    onCancelPressed: () => dispatch(removeNewcardVisibility()),
    onAddTaskPressed: listName => dispatch(updateNewcardVisibility(listName)),
    onDeleteTaskPressed: task => dispatch(deleteTask(task)),
})

export default connect(mapStateToProps, dispatchStateToProps)(TaskListContainer);