import React, { useState } from 'react';
import Calender from '../Calender/Calender';
import CompletedTasks from '../CompletedTasks/CompletedTasks';
import Footer from './Footer';

const Home = () => {

    return (
        <div>
            <Calender></Calender>
            <CompletedTasks></CompletedTasks>
            <Footer></Footer>
           
            
        </div>
    );
};

export default Home;