import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const PrayerTimes = () => {
  const [prayerTimes, setPrayerTimes] = useState({});

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await api.get('/prayerTimes');
        setPrayerTimes(response.data);
      } catch (error) {
        console.error('Error fetching prayer times:', error);
      }
    };

    fetchPrayerTimes();
  }, []);

  return (
    <div>
      <h1>Prayer Times</h1>
      <ul>
        <li>Fajr: {prayerTimes.fajr}</li>
        <li>Sunrise: {prayerTimes.sunrise}</li>
        <li>Dhuhr: {prayerTimes.dhuhr}</li>
        <li>Asr: {prayerTimes.asr}</li>
        <li>Maghrib: {prayerTimes.maghrib}</li>
        <li>Isha: {prayerTimes.isha}</li>
      </ul>
    </div>
  );
};

export default PrayerTimes;