import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add functionality to handle form submission (e.g., send an email, save to database)
    alert('Your message has been sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto my-8 px-4">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white p-6 rounded-lg text-center mb-8">
        <h1 className="text-4xl font-semibold mb-4">Contact Us</h1>
        <p className="text-lg">We'd love to hear from you! Reach out with any questions, suggestions, or concerns.</p>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">Your Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your message"
              rows="4"
              required
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition duration-300 w-full"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* Contact Details Section */}
      <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Contact Details</h2>
        <p className="text-lg mb-2"><strong>Email:</strong> mosque@example.com</p>
        <p className="text-lg mb-2"><strong>Phone:</strong> +123-456-7890</p>
        <p className="text-lg mb-2"><strong>Address:</strong> 123 Mosque St, City, Country</p>
        <p className="text-lg mb-2"><strong>Business Hours:</strong> Mon-Sun: 8:00 AM - 8:00 PM</p>
      </section>

      {/* Google Maps Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Find Us</h2>
        <div className="w-full h-64 mb-4">
          <iframe
            title="mosque-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27991737944!2d-74.2598757!3d40.6971494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25aab35f0b63b%3A0x4b63a727bc4c8bc7!2sNew%20York%20City!5e0!3m2!1sen!2sus!4v1623248416331!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
        <div className="flex space-x-4">
          <a href="#" className="text-blue-600 hover:text-blue-700">
            <i className="fab fa-facebook-square fa-2x"></i>
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-500">
            <i className="fab fa-twitter-square fa-2x"></i>
          </a>
          <a href="#" className="text-pink-600 hover:text-pink-700">
            <i className="fab fa-instagram-square fa-2x"></i>
          </a>
          <a href="#" className="text-red-600 hover:text-red-700">
            <i className="fab fa-youtube-square fa-2x"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
