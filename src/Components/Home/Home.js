import React, { useState } from 'react';
import Calender from '../Calender/Calender';
import ToDo from '../ToDo/ToDo';

const Home = () => {
    const [completed, setCompleted] = useState(false);
    return (
        <div>
            <Calender></Calender>
            <ToDo completed={completed}  setCompleted={setCompleted}></ToDo>
            
        </div>
    );
};

export default Home;