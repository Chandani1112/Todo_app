import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState([]);

  const addData = (newData) => {
    setData([...data, newData]);
  };

  const clearData = () => {
    setData([]);
  };

  useEffect(() => {
    try {
      localStorage.setItem('myData', JSON.stringify(data));
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
    }
  }, [data]);

  useEffect(() => {
    try {
      const storedData = localStorage.getItem('myData');
      if (storedData) {
        setData(JSON.parse(storedData));
      }
    } catch (error) {
      console.error('Error retrieving data from localStorage:', error);
    }
  }, []);

  return (
    <div>
      <button onClick={() => addData('New Data')}>Add Data</button>
      <button onClick={clearData}>Clear Data</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
