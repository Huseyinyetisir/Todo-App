import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [todos, setTodos] = useState ([
    {rowNumber:1, rowDescription: 'Feed puppy', rowAssigned: 'Sadik'},
    {rowNumber:2, rowDescription: 'Water plants', rowAssigned: 'Okan'},
    {rowNumber:3, rowDescription: 'Make dinner', rowAssigned: 'Sadik'},
    {rowNumber:4, rowDescription: 'Feed puppy', rowAssigned: 'Sadik'},
    {rowNumber:5, rowDescription: 'Moved tickets', rowAssigned: 'Huseyin'},
    {rowNumber:6, rowDescription: 'Make dinner', rowAssigned: 'Sadik'}
  ])

  const addTodo = (description,assigned) => {
    const newTodo = {
      rowNumber: todos.length + 1,
      rowDescription: description,
      rowAssigned: assigned
    };
    setTodos(todos => [...todos, newTodo])
  }
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos = {todos}/>
          <NewTodoForm addTodo= {addTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
