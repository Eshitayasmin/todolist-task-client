import React, { useEffect, useState } from 'react';

const ToDo = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');

   
    useEffect( () =>{
        fetch(`http://localhost:5000/todo`, {
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

    const handleSubmit = e => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            task: todo,
            completed: false
        }
        setTodos([...todos].concat(newTodo));
        setTodo('');

        fetch('http://localhost:5000/todo', {
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


    return (
        <div className='text-center pt-12'>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setTodo(e.target.value)}  onKeyPress={handleKeypress} value={todo} id="task" type="text" name='task' placeholder="Add a task" className="input input-bordered input-warning w-full max-w-xs" />
                {/* <button type="submit" class="btn btn-active btn-primary">Button</button> */}
                
            </form>
            {
                todos.map(todo =><p key="todo.id">{todo.task}</p>)
            }
        </div>
    );
};

export default ToDo;