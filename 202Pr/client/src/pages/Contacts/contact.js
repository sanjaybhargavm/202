import React from 'react';
import './contact1.css';

function Contact() {
  const box1Data = [
    { name: 'Sanjay', email: 'sanjay@gmail.com', phone: '456-456-2367' },
    { name: 'Ravi', email: 'ravi@gmail.com', phone: '103-465-1331' }
  ];
  {/*const box2Data = [
    { name: 'Bob Johnson', email: 'bobjohnson@example.com', phone: '555-555-5555' },
	{ name: 'Mahesh Naik', email: 'maheshnaik@gmail.com', phone: '489-234-2322'}
  ];*/}

  return (
    <>
	<div className="grid-container"  style={{ position: 'relative',
      left: '500px',
      border: '1px'}} >
      <div className="grid-box box" >
        <h4 ></h4><br></br>
        {box1Data.map((contact, index) => (
          <p key={index} className="contact-item">
			<b>
            <div className="contact-name"><b>Name: </b>{contact.name}</div>
            <div className="contact-email"><b>Email: </b>{contact.email}</div>
            <div className="contact-phone"><b>Phone: </b> {contact.phone}</div>
			</b><br></br>
          </p>
        ))}
      </div>
	  {/*<div className="grid-box box">
	  <h4>Contact Details for Santa Clara</h4><br></br>
        {box2Data.map((contact, index) => (
          <p key={index} className="contact-item">
			<b>
            <div className="contact-name"><b>Name: </b>{contact.name}</div>
            <div className="contact-email"><b>Email: </b>{contact.email}</div>
            <div className="contact-phone"><b>Phone: </b> {contact.phone}</div>
			</b><br></br>
          </p>
        ))}
        </div>*/}
    </div>
  </>
  );
}

export default Contact;
