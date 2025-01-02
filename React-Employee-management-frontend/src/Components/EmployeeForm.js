import React, { useState, useEffect } from 'react';
import { createEmployee, updateEmployee } from './EmployeeService';

const EmployeeForm = ({ selectedEmployee, onFormSubmit }) => {
    const [employee, setEmployee] = useState({
        name: '',
        position: '',
        department: '',
        salary: '',
        dateOfJoining: ''
    });

    useEffect(() => {
        if (selectedEmployee) {
            setEmployee(selectedEmployee);
        }
    }, [selectedEmployee]);

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedEmployee) {
            await updateEmployee(selectedEmployee.id, employee);
        } else {
            await createEmployee(employee);
        }
        onFormSubmit();
        setEmployee({ name: '', position: '', department: '', salary: '', dateOfJoining: '' });
    };

    return (
        <>

        <form onSubmit={handleSubmit}>
        <h1><center>Employee Management System</center></h1>
            <h2>{selectedEmployee ? "Edit Employee" : "Add Employee"}</h2>
            <input name="name" type="text" value={employee.name} onChange={handleChange} placeholder="Name" required />
            <br/>
            
            <input name="position"  type = "text" value={employee.position} onChange={handleChange} placeholder="Position" required />
            <br/>
          
            <input name="department" type = "text" value={employee.department} onChange={handleChange} placeholder="Department" required />
            <br/>
        
            <input name="salary" type="number" value={employee.salary} onChange={handleChange} placeholder="Salary" required />
            <br/>
            
            <input name="dateOfJoining" type="date" value={employee.dateOfJoining} onChange={handleChange} required />
            <br/>
            
            <button type="submit">{selectedEmployee ? "Update" : "Add"}</button>
        </form>
        </>
    );
};

export default EmployeeForm;