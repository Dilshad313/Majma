import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MosqueList = () => {
    const [mosques, setMosques] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/mosque')
            .then(response => setMosques(response.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Mosques</h2>
            <ul>
                {mosques.map(mosque => (
                    <li key={mosque._id} className="mb-2 p-2 border rounded">
                        <h3 className="font-bold">{mosque.name}</h3>
                        <p>{mosque.location}</p>
                        <p>{mosque.imam}</p>
                        <p>{mosque.contact}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MosqueList;