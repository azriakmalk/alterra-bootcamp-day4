import { useState } from 'react';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, changeStatus } from '../../store/todo';

export default function Home() {
  const todos = useSelector((state) => state?.todo?.todos);
  const [todo,setTodo] = useState('');
  const dispatch = useDispatch();

  const isChecked = (e, id) => {
    dispatch(changeStatus(id));
  };

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const handleSubmit = () => {
    if(todo === '') return alert('Note tidak boleh kosong!')
    dispatch(addTodo(
      {
        id: todos.length ? todos[todos.length-1].id + 1 : 1,
        note : todo,
        status : false
      }
    ))
    setTodo('');
  };

  return (
    <div className='grid grid-cols-1 justify-items-center'>
      <div className='grid grid-cols-1 justify-items-center w-full'>
          <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">todos</h1>
          <div>
            <input className='w-96 mt-5 border-2 p-2 border-gray-600 rounded-xl' placeholder='Add todo...' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button className='border-2 p-2 ml-3 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl' onClick={handleSubmit}>SUBMIT</button>
          </div>
          {
            todos?.map((todo)=> {
            return (
              <div className='flex justify-between w-96 mt-5' key={todo.id}>
                <input type="checkbox" className="accent-pink-500" onChange={(e)=>isChecked(e,todo.id)} checked={todo.status}/>
                <p className={todo.status ? 'line-through' : ''}>{todo.note}</p>
                <button className='bg-gray-200 pt-2 pb-2 pl-1 pr-1 text-xs rounded-full' onClick={()=>handleDelete(todo.id)}>Delete</button>
              </div>
            )})
          }

      </div>
    </div>
  );
}