import React, { useEffect, useState } from 'react';
import SingleComplete from './SingleComplete';

const Completed = () => {

    const [completed, setCompleted] = useState([]);
    useEffect( () =>{
        fetch(`https://agile-atoll-20810.herokuapp.com/complete`, {
            method: 'GET',
            headers: {
                'content-type' : 'application/json',
            }   
        })
        .then(res => res.json())
        .then(data => {
           setCompleted(data);
        }) 
      
    }, []);

    
    return (
        <div>
           
           <div >
        
           {
                completed.map((task, index) => <SingleComplete 
                key={task._id} task={task}
                index={index}></SingleComplete>)
            }
           </div>
        </div>
    );
};

export default Completed;