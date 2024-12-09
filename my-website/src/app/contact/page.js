'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    subject: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_htlvv0j',
        'template_zxc22t6',
        {
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          message: formData.subject,
        },
        'wV5zT2u9d-Lf19hi_'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
        },
        (err) => {
          console.log('FAILED...', err);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your first name..."
          value={formData.firstname}
          onChange={handleInputChange}
        />

        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name..."
          value={formData.lastname}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <label htmlFor="subject">Message</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Say hello!"
          style={{ height: '200px' }}
          value={formData.subject}
          onChange={handleInputChange}
        ></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
