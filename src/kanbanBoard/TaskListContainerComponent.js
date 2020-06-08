import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TaskContainer from './TaskContainerComponent';
import img from '../assets/backgrounds/img1.jpg';
import { getLists } from './selectors';

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

const TaskListContainer = ({lists=[]}) => {
    // const [inputValue, setInputValue] = useState('');
    const content = (
        <ListWrapper>
                <TaskContainer listName = "New" />
                {/* {lists.map(list => <TaskContainer listName = {list.name}/>)} */}
        </ListWrapper>
    );
    return content;
};

const mapStateToProps = state => ({
    lists: getLists(state)
});

// const dispatchStateToProps = dispatch => ({
    
// })

export default connect(mapStateToProps)(TaskListContainer);