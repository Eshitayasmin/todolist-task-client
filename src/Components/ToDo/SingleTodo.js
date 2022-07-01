import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';



const SingleTodo = ({ todo, handleCompleted }) => {
const navigate = useNavigate();
const navigateEditTodo = (id) => {
    navigate(`/edit${id}`);
}
  
    return (
        <div className='flex justify-center w-screen'>
            <div>
                <p className='flex justify-between w-80 m-2 px-3 py-2 bg-gray-300'>  <span className='text-xl'> <input onClick={() => handleCompleted(todo)} className='w-4 h-4 mr-2' type="radio" name="radio-6" class="radio w-5 h-5 mr-2 mt-2 checked:bg-blue-500" checked />
                    {todo.task}</span>
                    <button onClick={() =>navigateEditTodo(todo._id)} class="btn btn-xs btn-outline btn-error"><FontAwesomeIcon icon={faPencil} /></button></p>
            </div>
        </div>
    );
};

export default SingleTodo;

