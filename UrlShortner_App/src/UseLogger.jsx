import React from 'react'

const UseLogger = () => {
  return (message, data = null) =>{
    const timestamp = new Date().toISOString();

    const logData={
        timestamp,
        message,
        data,
    };
    const logs = JSON.parse(localStorage.getItem('logs')||'[]');
    logs.push(logData);
    localStorage.setItem('logs',JSON.stringify(logs));
  };
};

export default UseLogger