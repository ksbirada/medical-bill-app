import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = ({ bills, handleAddBill }) => {

  console.log(bills);
  console.log(bills);
  return (
    <div className="table-container">
      <h2>Uploaded Bills</h2>
      {(bills.length > 0 )? (
        <table className="table">
        <thead>
          <tr>
            <th className="table-header">Patient Name</th>
            <th className="table-header">Address</th>
            <th className="table-header">Hospital Name</th>
            <th className="table-header">Date of Service</th>
            <th className="table-header">Bill Amount</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill, index) => (
            <tr key={index}>
              <td className="table-cell">{bill.patientName}</td>
              <td className="table-cell">{bill.address}</td>
              <td className="table-cell">{bill.hospitalName}</td>
              <td className="table-cell">{bill.dateOfService}</td>
              <td className="table-cell">{bill.billAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      ) : (
        <p>No bills uploaded yet.</p>
      )}
      {/* <button onClick={handleAddBill}>Add New Bill</button>*/}
      <div className="button-container">
      <Link to="/form">
        <button onClick={handleAddBill}>Add New Bill</button>
      </Link>
      </div>
    </div>
  );
};

export default HomePage;
