import React from 'react';

const SingleComplete = ({task, index}) => {
    return (
        <div className='flex justify-center'>
            <p className='bg-green-400 w-72 lg:w-80 p-2 rounded-md my-3 text-left ml-3'><span className='mr-1'>{index+1}.</span>{task.task}</p>
        </div>
    );
};

export default SingleComplete;