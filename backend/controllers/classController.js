const Class = require('../models/Class');
const User = require('../models/User');

exports.createClass = async (req, res) => {
  try {
    const classObj = new Class(req.body);
    await classObj.save();
    res.status(201).json(classObj);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getClasses = async (req, res) => {
  try {
    const classes = await Class.find().populate('instructor');
    res.json(classes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getClassById = async (req, res) => {
  try {
    const classObj = await Class.findById(req.params.id).populate('students');
    if (!classObj) return res.status(404).json({ message: 'Class not found' });
    res.json(classObj);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateClass = async (req, res) => {
  try {
    const classObj = await Class.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );
    if (!classObj) return res.status(404).json({ message: 'Class not found' });
    res.json(classObj);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteClass = async (req, res) => {
  try {
    const classObj = await Class.findByIdAndDelete(req.params.id);
    if (!classObj) return res.status(404).json({ message: 'Class not found' });
    res.json({ message: 'Class deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.registerForClass = async (req, res) => {
  try {
    const classObj = await Class.findById(req.params.classId);
    const user = await User.findById(req.user.id);

    if (!classObj) return res.status(404).json({ message: 'Class not found' });
    
    // Check if user is already registered
    if (classObj.students.includes(user._id)) {
      return res.status(400).json({ message: 'Already registered for this class' });
    }

    // Add student to class
    classObj.students.push(user._id);
    await classObj.save();

    res.json({ message: 'Successfully registered for class' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};