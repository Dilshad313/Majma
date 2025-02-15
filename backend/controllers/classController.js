const Class = require('../models/Class');
const User = require('../models/User');

exports.createClass = async (req, res) => {
  try {
    const classObj = new Class(req.body);
    await classObj.save();
    res.status(201).json(classObj);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getClassById = async (req, res) => {
  try {
    const classObj = await Class.findById(req.params.id);
    if (!classObj) {
      return res.status(404).json({ message: 'Class not found' });
    }
    res.json(classObj);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.updateClass = async (req, res) => {
  try {
    const classObj = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!classObj) {
      return res.status(404).json({ message: 'Class not found' });
    }
    res.json(classObj);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.deleteClass = async (req, res) => {
  try {
    const classObj = await Class.findByIdAndDelete(req.params.id);
    if (!classObj) {
      return res.status(404).json({ message: 'Class not found' });
    }
    res.json({ message: 'Class deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.registerForClass = async (req, res) => {
  try {
    const classObj = await Class.findById(req.params.classId);
    if (!classObj) {
      return res.status(404).json({ message: 'Class not found' });
    }
    classObj.students.push(req.user._id);
    await classObj.save();
    res.json(classObj);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};