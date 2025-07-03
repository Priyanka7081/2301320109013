import React, { useState } from "react";
import registerUser from "./registerUser";

const App = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    try {
      const data = await registerUser();
      setResult(data);
      setError(null);
    } catch (err) {
      setError(err);
      setResult(null);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">User Registration</h1>
      <button
        onClick={handleRegister}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Register
      </button>

      {result && (
        <div className="mt-6 p-4 bg-green-100 rounded shadow">
          <h2 className="font-semibold mb-2">Success:</h2>
          <ul>
            {Object.entries(result).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value.toString()}
              </li>
            ))}
          </ul>
        </div>
      )}

      {error && (
        <div className="mt-6 p-4 bg-red-100 rounded shadow">
          <h2 className="font-semibold mb-2">Error:</h2>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
