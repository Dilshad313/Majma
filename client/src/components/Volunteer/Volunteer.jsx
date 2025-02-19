import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const Volunteer = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const response = await api.get('/volunteers');
        setVolunteers(response.data);
      } catch (error) {
        console.error('Error fetching volunteers:', error);
      }
    };

    fetchVolunteers();
  }, []);

  return (
    <div>
      <h1>Volunteers</h1>
      <ul>
        {volunteers.map((volunteer) => (
          <li key={volunteer._id}>{volunteer.user.firstName} {volunteer.user.lastName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Volunteer;