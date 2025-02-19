import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const Nikah = () => {
  const [nikahs, setNikahs] = useState([]);

  useEffect(() => {
    const fetchNikahs = async () => {
      try {
        const response = await api.get('/nikah');
        setNikahs(response.data);
      } catch (error) {
        console.error('Error fetching nikahs:', error);
      }
    };

    fetchNikahs();
  }, []);

  return (
    <div>
      <h1>Nikah</h1>
      <ul>
        {nikahs.map((nikah) => (
          <li key={nikah._id}>{nikah.groomName} & {nikah.brideName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Nikah;