import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { toast } from 'react-toastify';

const Class = () => {
  const [classes, setClasses] = useState([]);
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [section, setSection] = useState('');
  const [teacher, setTeacher] = useState('');
  const [schedule, setSchedule] = useState('');
  const [capacity, setCapacity] = useState('');

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await api.get('/classes');
        setClasses(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/classes', { name, grade, section, teacher, schedule, capacity });
      setClasses([...classes, response.data]);
      setName('');
      setGrade('');
      setSection('');
      setTeacher('');
      setSchedule('');
      setCapacity('');
      toast.success('Class created successfully');
    } catch (error) {
      console.error('Error creating class:', error);
      toast.error('Failed to create class');
    }
  };

  return (
    <div>
      <h1>Classes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Section"
          value={section}
          onChange={(e) => setSection(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Teacher"
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Schedule"
          value={schedule}
          onChange={(e) => setSchedule(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Capacity"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          required
        />
        <button type="submit">Create Class</button>
      </form>
      <ul>
        {classes.map((classObj) => (
          <li key={classObj._id}>
            <h2>{classObj.name}</h2>
            <p>Grade: {classObj.grade}</p>
            <p>Section: {classObj.section}</p>
            <p>Teacher: {classObj.teacher}</p>
            <p>Schedule: {classObj.schedule}</p>
            <p>Capacity: {classObj.capacity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Class;