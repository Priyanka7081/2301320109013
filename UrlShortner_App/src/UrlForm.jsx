import React, { useState } from 'react';

const UrlForm = ({ onSubmit }) => {
  const [longUrl, setLongUrl] = useState('');
  const [validity, setValidity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!longUrl) return;
    onSubmit({ longUrl, validity: Number(validity) });
    setLongUrl('');
    setValidity('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="url"
        placeholder="Enter long URL"        
        className="border p-2 w-full"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Validity (in days, optional)"
        className="border p-2 w-full"
        value={validity}
        onChange={(e) => setValidity(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Shorten URL
      </button>
    </form>
  );
};

export default UrlForm;