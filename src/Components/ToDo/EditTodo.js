import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'

const EditTodo = ({completed, setCompleted}) => {
    const { id } = useParams();
    const navigate = useNavigate();
    console.log(id);
    const [task, setTask] = useState({});
    useEffect(() => {
        const url = `https://agile-atoll-20810.herokuapp.com/todo/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTask(data));
    }, [])
  
    const handleUpdate = e => {
        e.preventDefault();

        const updateTodo = {
            id: new Date().getTime(),
            task: task,
            completed: completed
        }

        setTask('');

        const url = `https://agile-atoll-20810.herokuapp.com/todo/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateTodo)
        })
            .then(res => res.json())
            .then(data => {
                toast('Task Edited successfully!!!');
                e.target.reset();
            })

        navigate('/toDo');   

    }
    
    return (
        <div className='flex justify-center pt-12'>
            <div>
            <h1 className='text-blue-400 text-center text-2xl mb-3'>Update Your Task</h1>
             <form onSubmit={handleUpdate}>
               <p className='flex'> <input onChange={(e) => setTask(e.target.value)}  id="task" type="text" name='task' placeholder="Update Task" className="input input-bordered input-warning w-80 max-w-xs" />
                <button type="submit" class="btn btn-md btn-active btn-primary ml-4">Update</button></p>
                
            </form>
            </div>
        </div>
    );
};

export default EditTodo;