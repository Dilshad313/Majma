import React, { useEffect, useState } from 'react';

// Mock Data for Prayer Times, Events, and Donations (replace with real API calls)
const prayerTimes = [
  { time: "Fajr", value: "5:30 AM" },
  { time: "Dhuhr", value: "12:15 PM" },
  { time: "Asr", value: "3:45 PM" },
  { time: "Maghrib", value: "6:15 PM" },
  { time: "Isha", value: "7:45 PM" },
];

const events = [
  { name: "Quran Recitation Class", date: "2025-02-10" },
  { name: "Eid Celebration", date: "2025-04-10" },
  { name: "Charity Event", date: "2025-03-15" },
];

const donationTarget = 5000; // Target donation amount in dollars
const currentDonations = 2200; // Current donations in dollars

const Home = () => {
  const [donationProgress, setDonationProgress] = useState(0);

  useEffect(() => {
    // Simulate donation progress (this would come from a real API)
    setDonationProgress((currentDonations / donationTarget) * 100);
  }, []);

  return (
    <div className="container mx-auto my-8 px-4">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-[400px] rounded-lg mb-8" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}>
        <div className="bg-black bg-opacity-50 h-full flex justify-center items-center text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Mosque Management</h1>
          <p className="text-lg mb-6">Efficiently managing prayer schedules, events, and donations for our community.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition duration-300">
            Learn More
          </button>
        </div>
      </section>

      {/* Prayer Times Section */}
      <section className="bg-gray-100 p-6 rounded-lg mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">Today’s Prayer Times</h2>
        <ul className="space-y-4 text-lg">
          {prayerTimes.map((prayer, index) => (
            <li key={index} className="flex justify-between">
              <span className="font-semibold">{prayer.time}:</span>
              <span>{prayer.value}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Upcoming Events Section */}
      <section className="p-6 mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
              <p className="text-lg text-gray-700">{new Date(event.date).toLocaleDateString()}</p>
              <button className="text-blue-600 hover:text-blue-700 mt-4">More Details</button>
            </div>
          ))}
        </div>
      </section>

      {/* Donation Section */}
      <section className="bg-green-100 p-6 rounded-lg mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">Support Our Mosque</h2>
        <div className="flex justify-center items-center mb-4">
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-green-600 h-4 rounded-full"
              style={{ width: `${donationProgress}%` }}
            ></div>
          </div>
        </div>
        <p className="text-lg text-center mb-4">We’re aiming for ${donationTarget} to maintain and improve mosque facilities. Currently, we have received ${currentDonations}!</p>
        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-full transition duration-300 block mx-auto">
          Donate Now
        </button>
      </section>

      {/* Interactive Map Section */}
      <section className="bg-gray-200 p-6 rounded-lg mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">Find Us</h2>
        <div className="w-full h-[400px] bg-gray-300 rounded-lg">
          <p className="text-center text-xl mt-10">Map Placeholder - Mosque Location</p>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="p-6 bg-blue-50 rounded-lg mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">Announcements</h2>
        <ul className="space-y-4 text-lg">
          <li>
            <strong>Important Reminder:</strong> Ramadan begins on March 25th, make sure to check the updated prayer schedule.
          </li>
          <li>
            <strong>New Quran Classes:</strong> Starting April 5th, enroll now!
          </li>
          <li>
            <strong>Fundraising Goal:</strong> We are raising funds for new prayer mats and facility improvements. Help us reach our goal!
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="p-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-lg mb-4">Have questions or want to join our activities? Contact us today!</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition duration-300">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Home;
