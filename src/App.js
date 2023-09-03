import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState ([
    {rowNumber:1, rowDescription: 'Feed puppy', rowAssigned: 'Sadik'},
    {rowNumber:2, rowDescription: 'Water plants', rowAssigned: 'Okan'},
    {rowNumber:3, rowDescription: 'Make dinner', rowAssigned: 'Sadik'},
    {rowNumber:4, rowDescription: 'Feed puppy', rowAssigned: 'Sadik'},
    {rowNumber:5, rowDescription: 'Moved tickets', rowAssigned: 'Huseyin'},
    {rowNumber:6, rowDescription: 'Make dinner', rowAssigned: 'Sadik'}
  ])

  const addTodo = (description,assigned) => {
    let rowNumber =0;
    if (todos.length > 0){
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    }else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned
    };
    setTodos(todos => [...todos, newTodo]);
  }

  const deleteTodo = (rowNumber) => {
    let filtered = todos.filter(function (value){
      return value.rowNumber !== rowNumber;
    })
    setTodos(filtered);
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos = {todos} deleteTodo={deleteTodo} />
          <button className='btn btn-primary' onClick= { () => setShowAddTodoForm(!showAddTodoForm)}>
            {showAddTodoForm ? 'Close': 'Add Todo'}
          </button>
          {showAddTodoForm && 
          <NewTodoForm addTodo= {addTodo}/>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
