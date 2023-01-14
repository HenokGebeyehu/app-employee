import './App.css';
/*import HomePage from "./Components/HomePage";
import EmployeePage from './Components/EmployeePage';
import Wrapper from './Components/Wrapper';*/
import imageOne from "./assets/Images/Image_one.jpeg";
//import imageTwo from "./assets/Images/Image_two.jpeg";
//import imageThree from "./assets/Images/Image_three.jpeg";
import React, {useState, useEffect} from "react";
import Form from "./Components/Form";
import Home from "./Components/Home"
import Employees from "./Components/Employees";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Nav from './Components/Nav'



const App =() => {
const [employees, setEmployees] = useState([]);
useEffect(() => {
  fetch(
    `https://lit-dusk-21328.herokuapp.com/api/employees/allemployees`
  )
  .then((res) => res.json())
  .then((data) => {
    if (data) setEmployees(data);
  });

}, []);
const [employeeDetail, setEmployeeDetail] = useState(
  {
    id: 1,
    image: imageOne,
    name: "John Doe",
    occupation: " Front End Developer",
    callMobile: "Mobile: + 364387439749",
    SMS: "SMS: 617-9999 0002",
    emailAddress: "Email: JohnDoe@gmail.com",
  });

  return (
  <BrowserRouter>
  <div className="container">
  <Nav />
         <Routes>
           <Route path='/' element = {<Home />} />
           <Route path ='/add-employees' element = {<Form />} />
           <Route path ='/employees-list' element = { <Employees 
                  setEmployeesDetail={setEmployeeDetail} 
                  employeesDetail= {employeeDetail}
                  employees = {employees} 
            /> 
          } 
        />
          </Routes>
          </div>
     </BrowserRouter>
  
     )
    };

export default App;
