import React from 'react';
import Banner from './kanbanBoard/Banner'
import TaskListContainer from './kanbanBoard/TaskListContainerComponent'
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import img from './assets/backgrounds/img2.jpg';

const AppDiv = styled.div`
  font-family: sans-serif;
  position:absolute;
  width:100%;
  height:100%;
  /* background-image: url(${img});
  background-size: cover; */
`;

const App = () =>
  (
    <AppDiv className="App">
      <Banner/>
      <DndProvider backend={HTML5Backend}>
        <TaskListContainer />
      </DndProvider>
    </AppDiv>
  );

export default App;
