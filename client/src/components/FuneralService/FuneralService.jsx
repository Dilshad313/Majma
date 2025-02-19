import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const FuneralService = () => {
  const [funeralServices, setFuneralServices] = useState([]);

  useEffect(() => {
    const fetchFuneralServices = async () => {
      try {
        const response = await api.get('/funeral-services');
        setFuneralServices(response.data);
      } catch (error) {
        console.error('Error fetching funeral services:', error);
      }
    };

    fetchFuneralServices();
  }, []);

  return (
    <div>
      <h1>Funeral Services</h1>
      <ul>
        {funeralServices.map((service) => (
          <li key={service._id}>{service.deceasedName}</li>
        ))}
      </ul>
    </div>
  );
};

export default FuneralService;