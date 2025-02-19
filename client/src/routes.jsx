import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Announcement from './components/Announcement/Announcement';
import Book from './components/Book/Book';
import Class from './components/Class/Class';
import Donation from './components/Donation/Donation';
import Event from './components/Event/Event';
import FuneralService from './components/FuneralService/FuneralService';
import Nikah from './components/Nikah/Nikah';
import PrayerTimes from './components/PrayerTimes/PrayerTimes';
import User from './components/User/User';
import Volunteer from './components/Volunteer/Volunteer';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/announcements" element={<Announcement />} />
      <Route path="/books" element={<Book />} />
      <Route path="/classes" element={<Class />} />
      <Route path="/donations" element={<Donation />} />
      <Route path="/events" element={<Event />} />
      <Route path="/funeral-services" element={<FuneralService />} />
      <Route path="/nikah" element={<Nikah />} />
      <Route path="/prayer-times" element={<PrayerTimes />} />
      <Route path="/users" element={<User />} />
      <Route path="/volunteers" element={<Volunteer />} />
    </Routes>
  );
};

export default AppRoutes;