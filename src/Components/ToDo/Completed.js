import React from 'react';
import SingleComplete from './SingleComplete';

const Completed = ({completed}) => {
    return (
        <div>
            <h2>completed: {completed.length}</h2>
            {
                completed.map(task => <h1>{task.task}</h1>)
            }
        </div>
    );
};

export default Completed;