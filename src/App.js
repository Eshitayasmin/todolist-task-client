
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Routes, Route} from "react-router-dom";
import Calender from './Components/Calender/Calender';
import ToDo from './Components/ToDo/ToDo';
import EditTodo from './Components/ToDo/EditTodo';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>

     <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/calender' element={<Calender></Calender>}></Route>
          <Route path='/toDo' element={<ToDo></ToDo>}></Route>
          <Route path='/edit:id' element={<EditTodo></EditTodo>}></Route>
     </Routes>
    </div>
  );
}

export default App;
