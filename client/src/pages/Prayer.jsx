import React, { useEffect, useState } from 'react';

// Prayer Times Data (mock data for now, can be replaced with API call)
const times = {
  fajr: "05:00 AM",
  dhuhr: "12:30 PM",
  asr: "03:45 PM",
  maghrib: "06:15 PM",
  isha: "07:30 PM",
};

const Prayer = () => {
  const [currentPrayer, setCurrentPrayer] = useState('');
  const [timeLeft, setTimeLeft] = useState('');

  // Function to calculate the time left for the next prayer
  const calculateTimeLeft = (prayerTime) => {
    const now = new Date();
    const prayerDate = new Date();
    prayerDate.setHours(Number(prayerTime.split(":")[0]), Number(prayerTime.split(":")[1].split(" ")[0]), 0, 0);

    const timeDifference = prayerDate - now;
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours} hours and ${minutes} minutes`;
  };

  // Effect to calculate the current prayer and time left
  useEffect(() => {
    const currentTime = new Date().getHours() * 60 + new Date().getMinutes();

    const prayerTimesInMinutes = {
      fajr: (5 * 60),
      dhuhr: (12 * 60 + 30),
      asr: (15 * 60 + 45),
      maghrib: (18 * 60 + 15),
      isha: (19 * 60 + 30),
    };

    let nextPrayer = '';
    let timeRemaining = '';

    Object.entries(prayerTimesInMinutes).forEach(([prayer, time]) => {
      if (currentTime < time) {
        nextPrayer = prayer;
        timeRemaining = calculateTimeLeft(times[prayer]);
        return;
      }
    });

    if (!nextPrayer) {
      nextPrayer = 'Fajr';
      timeRemaining = calculateTimeLeft(times['fajr']);
    }

    setCurrentPrayer(nextPrayer);
    setTimeLeft(timeRemaining);
  }, []);

  return (
    <div className="container mx-auto my-8 px-4">
      {/* Hero Section */}
      <section className="bg-blue-500 p-6 text-white rounded-lg mb-8 text-center">
        <h1 className="text-4xl font-semibold mb-4">Prayer Times</h1>
        <p className="text-lg">Stay connected with the prayer schedule for our community.</p>
      </section>

      {/* Next Prayer Section */}
      <section className="bg-gray-100 p-6 rounded-lg mb-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Next Prayer</h2>
        <div className="text-xl font-bold mb-2">
          <span className="uppercase">{currentPrayer}</span> Prayer is Coming!
        </div>
        <div className="text-lg mb-4">
          Time Left: <span className="font-semibold">{timeLeft}</span>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition duration-300">
          Set Prayer Reminder
        </button>
      </section>

      {/* Prayer Times List Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">All Prayer Times</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(times).map(([name, time]) => (
            <div
              key={name}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
              <p className="text-lg">{time}</p>
              <button
                className="text-blue-600 hover:text-blue-700 mt-4"
                onClick={() => alert(`You have set a reminder for the ${name} prayer at ${time}`)}
              >
                Set Reminder
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Prayer;
