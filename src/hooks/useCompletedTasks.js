import { useEffect, useState } from "react";

const useCompletedTasks = () =>{
    const [completed, setCompleted] = useState({});

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
           console.log("useTask", data);
        }) 
      
    }, []);
    return [completed, setCompleted];
}
export default useCompletedTasks;