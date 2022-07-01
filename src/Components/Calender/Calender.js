import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='w-screen h-screen bg-zinc-100'>
           <div className='flex justify-center pt-12'>
         <div className='bg-red-200 px-12 lg:px-36 py-4 lg:py-6 rounded-lg'>
         <DayPicker 
            mode="single"
            selected={date}
            onSelect={setDate}/>
         </div>
           </div>
           <p className='text-center text-lg pt-2'>Your selected date is: <span className='text-blue-500 text-xl'>{format(date, 'PP')} </span></p>
           
        </div>
    );
};

export default Calender;