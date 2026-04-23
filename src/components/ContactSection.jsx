import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const now = new Date();
    const timestamp = now.toLocaleString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).replace(',', '');

    const dataToSubmit = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      timestampLabel: timestamp,
      sentAt: serverTimestamp()
    };

    try {
      setStatus('Sending...');

      // 1) Save to Firestore (collection: portfolio_messages)
      const docRef = await addDoc(collection(db, 'portfolio_messages'), dataToSubmit);

      // 2) Send email notification via EmailJS
      // Replace these IDs with your EmailJS values or set as env vars
      const EMAILJS_SERVICE_ID = 'REPLACE_WITH_SERVICE_ID';
      const EMAILJS_TEMPLATE_ID = 'REPLACE_WITH_TEMPLATE_ID';
      const EMAILJS_PUBLIC_KEY = 'REPLACE_WITH_PUBLIC_KEY';

      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        time: timestamp,
        id: docRef.id
      };

      try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
      } catch (emailErr) {
        console.warn('EmailJS send failed:', emailErr);
        // We don't abort here because Firestore write succeeded — inform the user below
      }

      setStatus('Message Sent Successfully!');
      alert('Message sent successfully!');

      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => setStatus(''), 3000);

    } catch (error) {
      console.error("Firebase error:", error);
      alert("There was an error sending your message. Please try again later.");
      setStatus('');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const val = value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, phone: val });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h1 className="contact-title">
            Let's <span className="contact-highlight">Connect</span>
          </h1>
          <div className="contact-underline"></div>
          <p className="contact-desc">
            I'm open to opportunities, collaborations, and conversations about software development.
          </p>

          <div className="contact-list">
            <ContactBox icon="📞" label="Phone" value="8305867158" />
            <ContactBox icon="✉️" label="Email" value="reeti6637@gmail.com" />
            <ContactBox icon="🔗" label="LinkedIn" value="@reeti-singh75" />
            <ContactBox icon="💻" label="GitHub" value="@reeti-singh75" />
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-form-card">
          <h2 className="contact-form-title">Let's Work Together</h2>

          <form onSubmit={handleSubmit} className="contact-form">

            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="contact-input"
              value={formData.name}
              onChange={handleChange}
            />

            <div className="contact-row">
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="contact-input"
                value={formData.email}
                onChange={handleChange}
              />

              <input
                name="phone"
                type="tel"
                placeholder="Phone (10 digits)"
                required
                className="contact-input"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="contact-textarea"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button
              type="submit"
              className="contact-submit-btn"
              disabled={status === 'Sending...'}
            >
              {status || 'Send Message'} <span>➤</span>
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

// Contact Box
const ContactBox = ({ icon, label, value }) => (
  <div className="contact-box">
    <div className="contact-icon">{icon}</div>
    <div>
      <div className="contact-label">{label}</div>
      <div className="contact-value">{value}</div>
    </div>
  </div>
);

export default ContactSection;