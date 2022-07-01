import { useEffect, useState } from "react";

const useTodo = id =>{
    const [todoDetail, setTodoDetail] = useState({});

    useEffect(() =>{
        fetch(`https://agile-atoll-20810.herokuapp.com/todo/${id}`)
        .then(res => res.json())
        .then(data => setTodoDetail(data));
    }, [id]);
    return [todoDetail, setTodoDetail];
}
export default useTodo;