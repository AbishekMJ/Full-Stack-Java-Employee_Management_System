import React, { useState } from 'react';
import './Style.css'
import EmployeeList from './Components/EmployeeList'
import EmployeeForm from './Components/EmployeeForm';


const App = () => {
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [refresh, setRefresh] = useState(false);

    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
    };

    const handleFormSubmit = () => {
        setSelectedEmployee(null);
        setRefresh(!refresh);
    };

    return (
        <div>
            <EmployeeForm selectedEmployee={selectedEmployee} onFormSubmit={handleFormSubmit} />
            <EmployeeList onEdit={handleEdit} />
        </div>
    );
};

export default App;