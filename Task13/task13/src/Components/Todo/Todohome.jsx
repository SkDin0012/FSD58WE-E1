import React,{useState} from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form';
import Filter from './Filter';
import CardTodo from './CardTodo';

const Todohome=()=>{
    const[todos,setTodos]=useState([]);
    const [filter,setFilter]=useState('all');

    const addTodo=(task)=>{
        setTodos([...todos,{...task,id:Date.now(),status:'not Completed'}]);
    };

    const updateTodo=(id,updateTask)=>{
        setTodos(todos.map(todo=>(todo.id===id ? {...todo,...updateTask}:todo)));
    }

    const deleteTodo=(id)=>{
        setTodos(todos.filter(todo=>todo.id!==id));
    };

    const filteredTodos = () => {
        switch (filter) {
          case 'completed':
            return todos.filter(todo => todo.status === 'completed');
          case 'not completed':
            return todos.filter(todo => todo.status === 'not completed');
          default:
            return todos;
        }
      };

      return(
        <div className='container'>
            <h1 className='text-center hrllo'>My todo</h1>
            <br/>
            <Form addTodo={addTodo}/>
            <Filter setFilter={setFilter}/>
            <div className='row'>
             {filteredTodos().map(todo=>(
                <div key={todo.id} className='col-md-4'>
                <CardTodo todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                </div>
             ))}
            </div>
        </div>

      );

}
export default Todohome;
