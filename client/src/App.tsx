import { useState } from 'react';
import UserForm from './components/UserForm';

function App() {
  const [result, setResult] = useState<string | null>(null);

  const handleFormSubmit = async (query: string) => {
    try {
      // Send the query to the backend API endpoint
      const response = await fetch('http://localhost:5000/api/fetchData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setResult(data.result); // Assuming your backend sends the result as `data.result`
    } catch (error) {
      console.error('Error:', error);
      setResult('Error fetching data');
    }
  };

  return (
    <div>
      <h1>Search API</h1>
      <UserForm onSubmit={handleFormSubmit} />
      {result && <p>Result: {result}</p>}
    </div>
  );
}

export default App;