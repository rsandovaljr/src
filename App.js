import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import './App.css';


function App() {
    const [employees, setEmployees] = useState([]);

    //load  data from local storage
    useEffect(() => {
        const savedEmployees = localStorage.getItem('employees');
        if (savedEmployees) {
            setEmployees(JSON.parse(savedEmployees));
        }
    }, []);

    //save data to local storage
    useEffect(() => {
        saveData(employees);
    }, [employees]);

    const saveData = (data) => {
        localStorage.setItem('employees', JSON.stringify(data));
    };

    const addEmployee = (employee) => {
        const newEmployee = { ...employee, EmployeeId: Date.now() };
        setEmployees([...employees, newEmployee]);
    };

    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <h1>New Employee Form</h1>
                    <EmployeeForm addEmployee={addEmployee} />
                    <EmployeeList employees={employees} />
                    <Routes>
                        <Route path="/employees/:id" element={<div>Employee Details</div>} />
                    </Routes>
                </header>
            </div>
        </BrowserRouter>
    );
}

export default App;

