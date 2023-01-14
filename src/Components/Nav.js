import React from 'react'
import { Link } from "react-router-dom"

function Nav() {
  return (
    <div style={StyleNav}>
    <nav>
    <h3>Employees</h3>
    <ul style={StyleUl}> 
    <li> <Link to ="/"> Home </Link></li>
    <li> <Link to ="/add-employees"> Add Employees </Link></li>
    <li> <Link to ="/employees-list"> Employees List </Link> </li> 
    </ul>
    </nav>
    </div>
  );
}
const StyleNav ={
    diplay: "flex",
    width: '100%',
    alignmentItems: "center",
    height:"25%",
    backgroundColor:"blue",
    color:"blue"

}
const StyleUl= {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "15px",
    listStyle: "none",
    gap: "5px"

}

export default Nav;