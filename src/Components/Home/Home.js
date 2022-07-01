import React, { useState } from 'react';
import Calender from '../Calender/Calender';
import CompletedTasks from '../CompletedTasks/CompletedTasks';
import Completed from '../ToDo/Completed';
import ToDo from '../ToDo/ToDo';

const Home = () => {

    return (
        <div>
            <Calender></Calender>
            <CompletedTasks></CompletedTasks>
           
            
        </div>
    );
};

export default Home;