import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  const todos = [
    {rowNumber:1, rowDescription: 'Feed puppy', rowAssigned: 'Sadik'},
    {rowNumber:2, rowDescription: 'Water plants', rowAssigned: 'Okan'},
    {rowNumber:3, rowDescription: 'Make dinner', rowAssigned: 'Sadik'},
    {rowNumber:4, rowDescription: 'Feed puppy', rowAssigned: 'Sadik'},
    {rowNumber:5, rowDescription: 'Water plants', rowAssigned: 'Okan'},
    {rowNumber:6, rowDescription: 'Make dinner', rowAssigned: 'Sadik'}
  ]
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos = {todos}/>
        </div>
      </div>
    </div>
  );
}

export default App;
