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
    res.status(400).json({ message: error.message });
  }
};

exports.manageFuneralService = async (req, res) => {
  try {
    const funeralService = new FuneralService({
      ...req.body,
      managedBy: req.user._id
    });
    await funeralService.save();
    res.status(201).json(funeralService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.registerVolunteer = async (req, res) => {
  try {
    const volunteerRegistration = new Volunteer({
      ...req.body,
      user: req.user._id
    });
    await volunteerRegistration.save();
    res.status(201).json(volunteerRegistration);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find().populate('user', 'firstName lastName email');
    res.json(volunteers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};