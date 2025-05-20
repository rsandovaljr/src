import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>New Employee Form</h1>
          <EmployeeForm />
          <EmployeeList />
          <Routes>
            <Route path="/employees/:id" element={<div>Employee Details</div>} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
