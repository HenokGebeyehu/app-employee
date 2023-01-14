import React from 'react'
import Wrapper from './Wrapper'
import HomePage from "./HomePage"
import EmployeePage from './EmployeePage'

function Employees(props) {
  return (
    <div>
          <Wrapper>
          <HomePage  setEmployeesDetail={props.setEmployeesDetail} employees={props.employees}/>
          <EmployeePage setEmployeeDetail = {props.employeeDetail} />
          </Wrapper>
        </div>
  );
}

export default Employees