import React from 'react'; 
import './App.css';
import { useState, useEffect, useRef } from 'react';
import {ITodo} from '../types/data'
import AddButton from './AddButton';
// import {AddButton} from './AddButton'

const App: React.FC = () =>  {
  return (
    <div className="App">
      <AddButton />
    </div>
  );
}

export default App;
