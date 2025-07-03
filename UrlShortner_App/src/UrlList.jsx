import React from 'react';

const UrlList = ({ urls }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Shortened URLs</h2>
      {urls.map((url, idx) => (
        <div key={idx} className="border p-3 mb-2 rounded bg-gray-100">
          <p><strong>Short URL:</strong> <a href={url.longUrl} target="_blank" rel="noreferrer">{url.shortUrl}</a></p>
          <p><strong>Original:</strong> {url.longUrl}</p>
          <p><strong>Validity:</strong> {url.validity} days</p>
        </div>
      ))}
    </div>
  );
};

export default UrlList;