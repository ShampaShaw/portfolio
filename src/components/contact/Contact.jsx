import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";


const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,      // Replace with your EmailJS service ID
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,      // Replace with your EmailJS template ID
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY          // Replace with your EmailJS user/public key
    )
    .then(() => {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setForm({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error("Email send error:", error);
    });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <p className="contact__subtitle">I'd love to connect with you!</p>

      <form className="contact__form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
        {submitted && <p className="contact__success">Message sent successfully!</p>}
      </form>

      <div className="contact__links">
        <a href="mailto:shampashaw088@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/shampa-shaw-3865ab236/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/ShampaShaw" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://x.com/Shaw_shampa088" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;