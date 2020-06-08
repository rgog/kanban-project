import React from 'react';
// import { hot } from 'react-hot-loader'
import TaskListContainer from './kanbanBoard/TaskListContainerComponent'
import styled from 'styled-components';

const AppDiv = styled.div`
  font-family: 'Poppins', sans-serif;
`;

const App = () =>
  (
    <AppDiv>
      <TaskListContainer />
    </AppDiv>
  );

export default App;
