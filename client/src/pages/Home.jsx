import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/images/image1.jpeg'
import image2 from '../assets/images/image2.jpeg'
import image3 from '../assets/images/image3.jpeg'

function Home() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-blue-500 via-green-500 to-blue-500 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <h1 className="text-6xl font-bold mb-6 drop-shadow-lg">Welcome to Our Application</h1>
        <p className="text-2xl font-light mb-8 drop-shadow-md">Join us today and experience the future of technology!</p>
        <div className="flex space-x-6">
          <Link to="/signup">
            <button className="bg-white text-blue-500 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-200 transition transform hover:scale-105">
              Signup
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-green-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-green-700 transition transform hover:scale-105">
              Login
            </button>
          </Link>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="w-full h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="relative w-full h-4/5 max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg">
          <div className="flex transition-transform duration-700" style={{ transform: 'translateX(0%)' }}>
            <div className="min-w-full">
              <img src={image1} alt="Feature 1" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent p-6 text-xl font-bold">
                Feature 1: Revolutionize your workflow with our tools.
              </div>
            </div>
            <div className="min-w-full">
              <img src={image2} alt="Feature 2" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent p-6 text-xl font-bold">
                Feature 2: Seamless integration for your daily needs.
              </div>
            </div>
            <div className="min-w-full">
              <img src={image3} alt="Feature 3" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent p-6 text-xl font-bold">
                Feature 3: Experience top-notch security and support.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full bg-white py-20 text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          <p className="text-lg leading-relaxed mb-8">
            We are a leading provider of innovative solutions designed to help you achieve your goals. Our platform is built with cutting-edge technology, tailored to meet your needs. Whether you're managing projects, collaborating with a team, or exploring new ideas, we've got you covered.
          </p>
          <p className="text-lg leading-relaxed">
            Join thousands of users who trust us to enhance their productivity and unlock new possibilities.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-gradient-to-b from-blue-500 to-green-500 py-20 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
              <p>"This platform has revolutionized the way I work. Highly recommended!"</p>
              <h3 className="mt-4 font-bold text-lg">- John Doe</h3>
            </div>
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
              <p>"Incredible features and top-notch support. A must-have for professionals."</p>
              <h3 className="mt-4 font-bold text-lg">- Jane Smith</h3>
            </div>
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
              <p>"Seamless, efficient, and easy to use. My productivity has soared!"</p>
              <h3 className="mt-4 font-bold text-lg">- Alex Johnson</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-gray-800 py-10 text-gray-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Our Application. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link to="/" className="mx-2 hover:text-white">Home</Link>
            <Link to="/signup" className="mx-2 hover:text-white">Signup</Link>
            <Link to="/login" className="mx-2 hover:text-white">Login</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
