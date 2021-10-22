import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import Tasks from './components/Tasks';
import './App.css';
import InputTask from './components/InputTask';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar programação',
      completed: false
    },
    {
      id: '1',
      title: 'Ler livros',
      completed: true
    }
  ]);

  const handleTaskAddition = (TaskTitle) => {
    const newTasks = [...tasks, {
      title: TaskTitle,
      id: uuidv4(),
      completed: false
    }];

    setTasks(newTasks);
  }

  return (
    <div className="container">
      <InputTask handleTaskAddition={handleTaskAddition}/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App; 