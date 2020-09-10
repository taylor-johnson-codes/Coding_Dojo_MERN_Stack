import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Task from './components/Task';

function App() {
  const [list, setList] = useState([])

  return (
    <div>
      {list.map(task => (
        <Task task={task} setList={setList}/>
      ))}
      <Input list={list} setList={setList}/>
    </div>
  );
}

export default App;