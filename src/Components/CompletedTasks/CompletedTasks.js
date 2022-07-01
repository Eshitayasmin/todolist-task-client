import React from 'react';
import Completed from '../ToDo/Completed';

const CompletedTasks = () => {
    return (
        <div className='bg-yellow-200 py-8 h-screen'>
            <h1 className='text-blue-400 text-2xl text-center mb-3'>Completed Tasks:</h1>
            <Completed></Completed>
        </div>
    );
};

export default CompletedTasks;