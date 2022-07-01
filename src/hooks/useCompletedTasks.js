import { useEffect, useState } from "react";

const useCompletedTasks = () =>{
    const [completed, setCompleted] = useState({});

    useEffect( () =>{
        fetch(`http://localhost:5000/complete`, {
            method: 'GET',
            headers: {
                'content-type' : 'application/json',
            }   
        })
        .then(res => res.json())
        .then(data => {
           setCompleted(data);
           console.log("useTask", data);
        }) 
      
    }, []);
    return [completed, setCompleted];
}
export default useCompletedTasks;