import { useState } from 'react';
import './App.css';

function App() {
  const [todos,setTodos] = useState([]);
  const [todo,setTodo] = useState('');

  const isChecked = (e, id) => {
    const changeStatus = todos.map((todo) => {
      if(id !== todo.id) {
        return todo
      }
      return {
        ...todo,
        status: e.target.checked
      }
    });
    setTodos(changeStatus);
  }

  const handlerDelete = (id) => {
    const deleteById = todos.filter((todo) => {
      return todo.id !== id
    });    
    setTodos(deleteById);
  }

  const handlerSubmit = () => {
    if(todo === '') return alert('Note tidak boleh kosong!')
    setTodos([
      ...todos,
      {
        id: todos.length ? todos[todos.length-1].id + 1 : 1,
        note : todo,
        status : false
      }
    ]);
    setTodo('');
  };

  return (
    <div className='grid grid-cols-1 justify-items-center'>
      <div className='grid grid-cols-1 justify-items-center w-3/12 '>        
          <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">todos</h1>
          <div>
            <input className='w-96 mt-5 border-2 p-2 border-gray-600 rounded-xl' placeholder='Add todo...' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button className='border-2 p-2 ml-3 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl' onClick={handlerSubmit}>SUBMIT</button>
          </div>

          {
            todos.map((state)=> {
            return (
              <div className='flex justify-between w-full mt-5' key={state.id}>
                <input type="checkbox" className="accent-pink-500" onChange={(e)=>isChecked(e,state.id)}/>
                <p className={state.status ? 'line-through' : ''}>{state.note}</p>
                <button className='bg-gray-200 pt-2 pb-2 pl-1 pr-1 text-xs rounded-full' onClick={()=>handlerDelete(state.id)}>Delete</button>
              </div>
            )})
          }

      </div>
    </div>
  );
}

export default App;
