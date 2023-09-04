import { useState, useEffect } from 'react';
import React from "react";
import axios from 'axios';

function Myhome(){

    const containerStyle = {
        fontSize: '16px', // Adjust as needed
        color: 'red' // Other styles
    };

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Make an HTTP request to fetch data
        axios.get('https://mydataset-3e8b28e862d5.herokuapp.com/')
        .then(response => {
            const mydata = response.data;
            console.log(response.data);
            setData(mydata.query1);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setError("Failed to fetch data.");
            setLoading(false);
        });
    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div style={containerStyle}>
            {data.map(item => (
                <li key={item.movementidd}>
                    {item.movementidd}, {item.newmend}, {item.staffname2}
                </li>
            ))}
        </div>
    );
}

export default Myhome;
