import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const personalInfo = [
    { label: 'Developer Name', value: 'Sheelam Tharun' },
    { label: 'Email', value: 'sheelamtharun123@gmail.com' },
    { label: 'Phone Number', value: '+91 9381572437' },
  ];

  return (
    <div className="contact-container text-center">
      <h2>My Contact Information</h2>
      <div className="personal-info">
        {personalInfo.map((info, index) => (
          <div key={index} className="info-item">
            <p className="info-label">{info.label}</p>
            <p className="info-value">{info.value}</p>
          </div>
        ))}
      </div>
      <Link to="/home" className="btn btn-primary">
        Go Back Home
      </Link>
      <div style={{marginTop:'50px'}}>
        <p>For freelance opportunities, reach out to me at sheelamtharun123@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
