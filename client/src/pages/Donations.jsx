import React, { useState } from 'react';

// Sample donation goal data
const donationGoal = {
  goalAmount: 5000,
  currentAmount: 3200,
};

const Donations = () => {
  const [amount, setAmount] = useState(0);

  // Handle amount change
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="container mx-auto my-8 px-4">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white p-6 rounded-lg text-center mb-8">
        <h1 className="text-4xl font-semibold mb-4">Support Our Mosque</h1>
        <p className="text-lg">Your donations help us serve the community better. Thank you for your generosity!</p>
      </section>

      {/* Donation Goal Section */}
      <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Donation Goal</h2>
        <div className="flex items-center mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full"
              style={{
                width: `${(donationGoal.currentAmount / donationGoal.goalAmount) * 100}%`,
              }}
            ></div>
          </div>
          <span className="ml-4">{`$${donationGoal.currentAmount} of $${donationGoal.goalAmount}`}</span>
        </div>
        <p className="text-gray-600">Help us reach our goal to build a new mosque and support our community's growth.</p>
      </section>

      {/* Donation Amount Section */}
      <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Make a Donation</h2>
        <div className="mb-4">
          <label htmlFor="donationAmount" className="block text-lg font-semibold mb-2">Choose Donation Amount</label>
          <input
            id="donationAmount"
            type="number"
            value={amount}
            onChange={handleAmountChange}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            placeholder="Enter amount"
          />
        </div>
        <div className="mb-4">
          <button
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg transition duration-300 w-full"
            onClick={() => alert(`Thank you for donating $${amount}!`)}
          >
            Donate Now
          </button>
        </div>
      </section>

      {/* Donation Testimonial Section */}
      <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">What Donors Are Saying</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
            <div>
              <p className="font-semibold">Aminah S.</p>
              <p>"I donated because I believe in supporting our mosque and community. Every little bit helps!"</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
            <div>
              <p className="font-semibold">Jamal K.</p>
              <p>"Happy to contribute to the growth of our mosque. May Allah bless this effort."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center">
        <p className="text-xl mb-4">Every contribution counts. Join us in building a stronger community.</p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition duration-300"
          onClick={() => alert("Redirecting to payment system...")}
        >
          Donate Now
        </button>
      </section>
    </div>
  );
};

export default Donations;
