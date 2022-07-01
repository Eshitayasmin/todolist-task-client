
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Routes, Route} from "react-router-dom";
import Calender from './Components/Calender/Calender';
import ToDo from './Components/ToDo/ToDo';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
          <Route path='/calender' element={<Calender></Calender>}></Route>
          <Route path='/toDo' element={<ToDo></ToDo>}></Route>
     </Routes>
    </div>
  );
}

export default App;
