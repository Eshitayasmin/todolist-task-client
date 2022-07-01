import React, { useEffect, useState } from 'react';
import useCompletedTasks from '../../hooks/useCompletedTasks';
import SingleTodo from './SingleTodo';
import { toast, ToastContainer } from 'react-toastify'


const ToDo = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');
    // const [completed, setCompleted] = useCompletedTasks();
    const [completed, setCompleted] = useState([]);

    useEffect(() => {
        fetch(`https://agile-atoll-20810.herokuapp.com/todo`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                setTodos(data);
            })

    }, []);

    useEffect(() => {
        fetch(`https://agile-atoll-20810.herokuapp.com/complete`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                setCompleted(data);
            })

    }, []);

    const handleCompleted = (selectedTodo) => {
        const exists = completed.find(task => task._id === selectedTodo._id);
        console.log(selectedTodo._id);
        console.log(selectedTodo);

        if (!exists) {

            fetch('https://agile-atoll-20810.herokuapp.com/complete', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedTodo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('post completed', data);
                    // toast(`Your Task: ${selectedTodo.task} is Completed`);

                })

            const newCompleted = [...completed, selectedTodo];
            setCompleted(newCompleted);


        }


        const url = `https://agile-atoll-20810.herokuapp.com/todo/${selectedTodo?._id}`;
        console.log("url is", url);
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log("deleted", data);
                if (data.deletedCount === 1) {
                    console.log("Successfully deleted one document.");
                    const remaining = todos.filter(todo => todo._id !== selectedTodo._id);
                    setTodos(remaining);
                } else {
                    console.log("No documents matched the query. Deleted 0 documents.");
                }





            })


    }


    const handleSubmit = e => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            task: todo,
            completed: false
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


    return (
        <div className='text-center pt-12'>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setTodo(e.target.value)} onKeyPress={handleKeypress} value={todo} id="task" type="text" name='task' placeholder="Add a task" className="input input-bordered input-warning w-9/12 lg:w-full max-w-xs" />
               

            </form>
           
          <div className='mt-3'>
          {
                todos.map(todo => <SingleTodo
                    key={todo._id}
                    todo={todo}
                    handleCompleted={handleCompleted}></SingleTodo>)
            }
          
          </div>

            <ToastContainer
            ></ToastContainer>
        </div>
    );
};

export default ToDo;