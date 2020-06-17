import React from 'react';
// import { hot } from 'react-hot-loader'
import TaskListContainer from './kanbanBoard/TaskListContainerComponent'
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

const AppDiv = styled.div`
  font-family: 'Poppins', sans-serif;
`;

const App = () =>
  (
    <AppDiv className="App">
      <DndProvider backend={HTML5Backend}>
        <TaskListContainer />
      </DndProvider>
    </AppDiv>
  );

export default App;
