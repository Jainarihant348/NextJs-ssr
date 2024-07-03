// pages/ssr.js
import { useEffect, useState } from 'react';

export default function SSRPage({ serverData }) {
  const [clientData, setClientData] = useState(null);

  useEffect(() => {
    // Client-side API call
    async function fetchClientData() {
      const res = await fetch('/api/client-data');
      const data = await res.json();
      setClientData(data);

      // Simulate delay
    //   setTimeout(() => {
    //     setClientData(data);
    //   }, 3000); // 3 seconds delay
    }
    

    fetchClientData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Server-Side Rendered Data</h1>
        <pre>{JSON.stringify(serverData, null, 2)}</pre>
      </div>
      <div>
        <h1>Client-Side Fetched Data</h1>
        {clientData ? <pre>{JSON.stringify(clientData, null, 2)}</pre> : <p>Loading...</p>}
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  // Server-side API call
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const serverData = await res.json();

  return {
    props: {
      serverData,
    },
  };
}
