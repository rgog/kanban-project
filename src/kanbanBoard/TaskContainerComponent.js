import React from 'react';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import TaskCard from "./TaskComponent";
import { connect } from 'react-redux'
import { getTasksForList } from './selectors'
import { createTask } from './actions';

const TaskListWrapper = styled.div`
    margin:0 4px;
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
    max-height:80vh;    
`;
const CardCreatorDiv = styled.div`
    height: 38px;
    display: flex;
    justify-content: space-between;
    
`;
const CardCreator = styled.a`
    padding:8px;
`;
const TaskContainer = ({listName, tasks=[], onCreatePressed}) => {
    const content = (
        <TaskListWrapper>
            <ListContainer>
                <ListHeaderDiv>
                    <ListHeaderText>{ listName }</ListHeaderText>
                </ListHeaderDiv>
                <CardDeck>
                        { tasks.map(task => <TaskCard task= { task }/>)}
                </CardDeck>
                <CardCreatorDiv>
                    <CardCreator
                        onClick = {() => {
                            const isDuplicate = 
                                tasks.some(task=>task.task==="SampleText");
                            if(!isDuplicate)
                                onCreatePressed("SampleText", listName)}
                        }
                    >
                        <FontAwesomeIcon icon={faPlus} />
                        <b>Add new Task</b>
                    </CardCreator>
                </CardCreatorDiv>
            </ListContainer>
        </TaskListWrapper>
    );
    return content;
};

const mapStateToProps = (state, ownProps) => ({
    tasks: getTasksForList(state, ownProps),
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: (text, status) => dispatch(createTask(text, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);