import React, { useEffect, useState } from 'react';
import SingleTodo from './SingleTodo';


const ToDo = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');
    const [completed, setCompleted] = useState([]);
  

   
    useEffect( () =>{
        fetch(`https://agile-atoll-20810.herokuapp.com/todo`, {
            method: 'GET',
            headers: {
                'content-type' : 'application/json',
            }   
        })
        .then(res => res.json())
        .then(data => {
           setTodos(data);
        }) 
      
    }, []);

   

    const handleCompleted = (selectedTodo) =>{
        const exists = completed.find(product => product.id === selectedTodo.id);
        
        if(!exists){
         const newCompleted = [...completed, selectedTodo];
         setCompleted(newCompleted);
         const completeTodo = {
            task: selectedTodo.task,
            completed: true
        }
     
        setTodo('');

        fetch('https://agile-atoll-20810.herokuapp.com/complete', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(completeTodo)
        })
            .then(res => res.json())
            .then(data => {
                console.log('post completed', data);
              
            })
            
        }
      
       
       }


    const handleSubmit = e => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            task: todo,
            completed: ''
        }
        setTodos([...todos].concat(newTodo));
        setTodo('');

        fetch('https://agile-atoll-20810.herokuapp.com/todo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTodo)
        })
            .then(res => res.json())
            .then(data => {
                console.log('post data', data);
               e.target.reset();
            })

    }
    
    const handleKeypress = e => {
        //it triggers by pressing the enter key
      if (e.keyCode === 13) {
        handleSubmit();
      }
    };

console.log(todos);
    return (
        <div className='text-center pt-12'>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setTodo(e.target.value)}  onKeyPress={handleKeypress} value={todo} id="task" type="text" name='task' placeholder="Add a task" className="input input-bordered input-warning w-full max-w-xs" />
                {/* <button type="submit" class="btn btn-active btn-primary">Button</button> */}
                
            </form>
            {
                todos.map(todo =><SingleTodo 
                    key={todo._id}
                    todo={todo}
                    handleCompleted={handleCompleted}></SingleTodo>)
            }

           
        </div>
    );
};

export default ToDo;