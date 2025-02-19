import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { toast } from 'react-toastify';

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [amount, setAmount] = useState('');
  const [purpose, setPurpose] = useState('');

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await api.get('/donations/user');
        setDonations(response.data);
      } catch (error) {
        console.error('Error fetching donations:', error);
      }
    };

    fetchDonations();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/donations', { amount, purpose });
      setDonations([...donations, response.data]);
      setAmount('');
      setPurpose('');
      toast.success('Donation made successfully');
    } catch (error) {
      console.error('Error making donation:', error);
      toast.error('Failed to make donation');
    }
  };

  return (
    <div>
      <h1>Donations</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Purpose"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          required
        />
        <button type="submit">Donate</button>
      </form>
      <ul>
        {donations.map((donation) => (
          <li key={donation._id}>
            <p>Amount: ${donation.amount}</p>
            <p>Purpose: {donation.purpose}</p>
            <p>Date: {new Date(donation.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Donation;