import React from 'react'
import { useState } from "react";

const Form = () => { 
  const [employeesData, setEmployeesData] = useState({
    name: "",
    occupation: "",
    callMobile: "",
    callOffice:"",
    sms: "",
    email: "",
    image:"",
  });

function handleChange(event) {
  const updatedUserData = {
    ...employeesData, [event.target.name]: event.target.value,
  };

  setEmployeesData(updatedUserData);
}
function handleSubmit(event){
  event.preventDefault();
  fetch("https://lit-dusk-21328.herokuapp.com/api/employees/addemployee", {
method: "POST",
body: JSON.stringify(employeesData),
headers: {
  "Content-Type": "application/json",
},
  });
}
    /*const [name, setName] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [occupation, setOccupation] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [cellPhone, setCellPhone] = useState("")
    const [sms, setSms] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    
    const handleName = (event) => {
        setName(event.target.value)
    };
    const handleImageUrl = (event) => {
        setImageUrl(event.target.value)
    };
    const handleOccupation = (event) => {
      setOccupation(event.target.value)
  };
  const handleMobileNumber = (event) => {
    setMobileNumber(event.target.value)
};
const handleCellPhone = (event) => {
  setCellPhone(event.target.value)
};
const handleSms = (event) => {
  setSms(event.target.value)
};
const handleEmailAddress= (event) => {
  setEmailAddress(event.target.value)
};*/


  return (
    <div>
    <h4 style = {{ textAlign: "center",}}>Form to Add Employee Details</h4>
    <form  onSubmit = {handleSubmit}>
    <input className="input" type ="text" name = 'name' placeholder= "Name of the employee" onChange = {handleChange} />
    <br/>
    <input className="input"type ="text" name = 'image' placeholder= "Image url" onChange = {handleChange} />
    <br/>
    <input className="input" type ="text" name = 'occupation' placeholder= "Occupation" onChange = {handleChange} />
    <br/>
    <input className="input" type ="number" name = 'callOffice' placeholder= "Office Mobile No." onChange = {handleChange} />
    <br/>
    <input className="input" type ="number" name= 'callMobile' placeholder= "Cell-Phone No." onChange = {handleChange} />
    <br/>
    <input className="input" type ="number" name = 'sms' placeholder= "SMS" onChange = {handleChange} />
    <br/>
    <input className="input" type ="emailAddress" name = 'email' placeholder= "Email Address" onChange = {handleChange} />
    <br/>
    <button className="input" style= {{ backgroundColor: 'blue', color: 'white'}}>Submit</button>
    </form>
    </div>
  )
};

export default Form;