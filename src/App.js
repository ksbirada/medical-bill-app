
//2nd
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormComponent from './components/FormComponent';
import HomePage from './components/HomePage';
import SummaryPage from './components/SummaryPage';
import React, { useState } from 'react';
import logo from './medical-bill-logo.png';
import './App.css'; // Import the CSS file

function App() {
  const [formData, setFormData] = useState(null);

  const billsDump=[{patientName: 'Kalyani', address: '719 Maryland Ave', hospitalName: 'Upsatate', dateOfService: '2023-06-20', billAmount: 788},
  {patientName: 'Eve', address: '174 James Street ,NY', hospitalName: 'Upstate', dateOfService: '2023-06-20', billAmount: 678}];

  const handleFormSubmit = (data) => {
    setFormData(data);
    setBills((prevBills) => [...prevBills, data]);
    toggleEdit();
  };


  

  const handleEdit = () => {
    // Logic to populate the form with existing data
    // You can update the initial form values based on your data structure
    const initialFormValues = {
      patientName: formData.patientName,
      address: formData.address,
      hospitalName: formData.hospitalName,
      dateOfService: formData.dateOfService,
      billAmount: formData.billAmount,
    };
  
    // Update the form data state with the initial values
    setFormData(initialFormValues);
    toggleEdit();
  };

  const handleAddBill = () => {
    setFormData({});
    setIsEditing(false);


  };

  const [isEditing, setIsEditing] = useState(false);

  

  const [bills, setBills] = useState(billsDump);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Router>
      <div className="App">

      <div className="header">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="app-name">Medical Bill Uploader</h1>
      </div>
      
        <Routes>
          <Route path="/" element={<HomePage bills={bills} handleAddBill={handleAddBill}/>} />
          {/*<Route path="/form" element={<FormComponent />} />*/}
          <Route path="/summary" element={<SummaryPage />} />
          <Route path="/form" element=      {isEditing ? (
        <SummaryPage formData={formData} handleEdit={handleEdit} />
      ) : (
        <FormComponent onSubmit={handleFormSubmit} initialValues={formData}/>
      )}
      />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



