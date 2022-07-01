import { useEffect, useState } from "react";

const useTodo = id =>{
    const [todoDetail, setTodoDetail] = useState({});

    useEffect(() =>{
        fetch(`http://localhost:5000/todo/${id}`)
        .then(res => res.json())
        .then(data => setTodoDetail(data));
    }, [id]);
    return [todoDetail, setTodoDetail];
}
export default useTodo;