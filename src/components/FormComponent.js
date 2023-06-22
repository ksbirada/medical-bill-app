import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './FormComponent.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const validationSchema = Yup.object({
  patientName: Yup.string().required('Patient name is required'),
  address: Yup.string().required('Address is required'),
  hospitalName: Yup.string().required('Hospital name is required'),
  dateOfService: Yup.date().required('Date of service is required'),
  billAmount: Yup.number().required('Bill amount is required'),
  billImage:Yup.mixed().required('Bill Image is required'),
});



const FormComponent = ({ onSubmit ,initialValues}) => {
  const handleSubmit = (values) => {
    onSubmit(values);
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues|| {
        patientName: '',
        address: '',
        hospitalName: '',
        dateOfService: '',
        billAmount: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="form-container">
        <div className="form-input">
          <label htmlFor="patientName">Patient Name</label>
          <Field type="text" id="patientName" name="patientName" />
          <ErrorMessage name="patientName" component="div" className="error" />
        </div>

        <div className="form-input">
          <label htmlFor="address">Address</label>
          <Field type="text" id="address" name="address" />
          <ErrorMessage name="address" component="div" className="error" />
        </div>

        <div className="form-input">
          <label htmlFor="hospitalName">Hospital Name</label>
          <Field type="text" id="hospitalName" name="hospitalName" />
          <ErrorMessage name="hospitalName" component="div" className="error" />
        </div>

        <div className="form-input">
          <label htmlFor="dateOfService">Date of Service</label>
          <Field type="date" id="dateOfService" name="dateOfService" />
          <ErrorMessage name="dateOfService" component="div" className="error" />
        </div>

        <div className="form-input">
          <label htmlFor="billAmount">Bill Amount</label>
          <Field type="number" id="billAmount" name="billAmount" />
          <ErrorMessage name="billAmount" component="div" className="error" />
        </div>

        <div className="form-input">
          <label htmlFor="billImage">Bill Image</label>
          <Field type="file" id="billImage" name="billImage" />
          <ErrorMessage name="billImage" component="div" className="error" />
        </div>

        <div className="submit-buttons">

        <button type="submit">Submit</button>

        <Link to="/" className="home-button">
        <button>Home</button>
      </Link>
      </div>
      </Form>

    </Formik>

    
  );
};

export default FormComponent;
