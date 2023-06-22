import React from 'react';
import './SummaryPage.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const SummaryPage = ({ formData, handleEdit }) => {
  return (


    <div className="summary-container ">
      <h2>Summary</h2>
      <div>
        <strong>Patient Name:</strong> {formData.patientName}
      </div>
      <div>
        <strong>Address:</strong> {formData.address}
      </div>
      <div>
        <strong>Hospital Name:</strong> {formData.hospitalName}
      </div>
      <div>
        <strong>Date of Service:</strong> {formData.dateOfService}
      </div>
      <div>
        <strong>Bill Amount:</strong> {formData.billAmount}
      </div>
      <div className="edit-button">
      <button onClick={handleEdit} >Edit</button>
      </div>
      
      <div className="button-container">
      
      <Link to="/" className="home-button">
        <button>Home</button>
      </Link>
      </div>
    </div>



  );
};

export default SummaryPage;

