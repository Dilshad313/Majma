import React, { useState } from 'react';

// Event Data
const events = [
  { id: 1, title: "Community Meetup", date: "2025-01-10", location: "Mosque Hall", description: "Join us for a community gathering.", image: "/images/community-meetup.jpg" },
  { id: 2, title: "Charity Drive", date: "2025-01-15", location: "Mosque Grounds", description: "Help us collect donations for the local orphanage.", image: "/images/charity-drive.jpg" },
  { id: 3, title: "Youth Retreat", date: "2025-02-05", location: "Retreat Center", description: "A spiritual retreat for the youth.", image: "/images/youth-retreat.jpg" },
];

const Events = () => {
  const [filter, setFilter] = useState('all');

  // Filter events by category
  const filteredEvents = filter === 'all' ? events : events.filter(event => event.title.toLowerCase().includes(filter));

  return (
    <div className="container mx-auto my-8 px-4">
      {/* Hero Section */}
      <section className="bg-green-500 text-white p-6 rounded-lg text-center mb-8">
        <h1 className="text-4xl font-semibold mb-4">Upcoming Events</h1>
        <p className="text-lg">Be a part of our community events and make a difference.</p>
      </section>

      {/* Filter Section */}
      <section className="mb-6 text-center">
        <button onClick={() => setFilter('all')} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mx-2">All Events</button>
        <button onClick={() => setFilter('charity')} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mx-2">Charity</button>
        <button onClick={() => setFilter('youth')} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mx-2">Youth</button>
      </section>

      {/* Events List Section */}
      <section className="space-y-6">
        {filteredEvents.length === 0 ? (
          <p className="text-center text-xl font-semibold">No upcoming events found.</p>
        ) : (
          filteredEvents.map(event => (
            <div key={event.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="flex flex-col md:flex-row items-center">
                <img src={event.image} alt={event.title} className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0" />
                <div className="md:ml-6 text-center md:text-left">
                  <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
                  <p className="text-lg mb-2">{new Date(event.date).toLocaleDateString()}</p>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <p className="text-gray-500 mb-4"><strong>Location:</strong> {event.location}</p>
                  <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg mt-4 transition duration-300">
                    RSVP Now
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Events;
