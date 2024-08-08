import React from 'react'; 
import './App.css';
import { useState, useEffect, useRef } from 'react';
import {ITodo} from '../types/data'
import AddTodoItem from './AddTodoItem';
// import {AddButton} from './AddButton'

const App: React.FC = () =>  {
  return (
    <div className="App">
      <div>
        Todo List:
      </div>
      <AddTodoItem />
    </div>
  );
}

export default App;
