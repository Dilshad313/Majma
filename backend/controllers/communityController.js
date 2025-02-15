const Nikah = require('../models/Nikah');
const FuneralService = require('../models/FuneralService');
const Volunteer = require('../models/Volunteer');

exports.registerNikah = async (req, res) => {
  try {
    const nikahRegistration = new Nikah({
      ...req.body,
      registeredBy: req.user._id
    });
    await nikahRegistration.save();
    res.status(201).json(nikahRegistration);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.manageFuneralService = async (req, res) => {
  try {
    const funeralService = new FuneralService(req.body);
    await funeralService.save();
    res.status(201).json(funeralService);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.registerVolunteer = async (req, res) => {
  try {
    const volunteer = new Volunteer({
      ...req.body,
      userId: req.user._id
    });
    await volunteer.save();
    res.status(201).json(volunteer);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.json(volunteers);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};