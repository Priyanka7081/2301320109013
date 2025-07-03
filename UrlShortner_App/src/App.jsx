import React, { useState } from 'react';
import UrlForm from './UrlForm';
import UrlList from './UrlList';
import useLogger from './UseLogger';

const App = () => {
  const [urls, setUrls] = useState([]);
  const log = useLogger();

  const generateShortCode = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
  };

  const handleShorten = ({ longUrl, validity }) => {
    let code;
    do {
      code = generateShortCode();
    } while (urls.find(u => u.shortCode === code));

    const defaultValidity = 30; // days
    const shortUrl = https//short.ly/${code};
    const newEntry = {
      longUrl,
      shortCode: code,
      shortUrl,
      validity: validity || defaultValidity,
    };

    setUrls([...urls, newEntry]);
    log('Shortened new URL', newEntry);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">React URL Shortener</h1>
      <UrlForm onSubmit={handleShorten} />
      <UrlList urls={urls} />
    </div>
  );
};

export default App;
