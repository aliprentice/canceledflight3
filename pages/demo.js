import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Demo() {
  const [activeTab, setActiveTab] = useState('flights');
  
  const sampleFlights = [
    {
      id: 'BA2490',
      airline: 'British Airways',
      from: 'London (LHR)',
      to: 'New York (JFK)'
    },
    {
      id: 'AF1680',
      airline: 'Air France',
      from: 'Paris (CDG)',
      to: 'Madrid (MAD)'
    },
    {
      id: 'LH2030',
      airline: 'Lufthansa',
      from: 'Frankfurt (FRA)',
      to: 'Rome (FCO)'
    }
  ];

  return (
    <div>
      <Head>
        <title>Demo - Flight Cancellation Information</title>
        <meta name="description" content="Demo of flight cancellation information service" />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4">
          <h1 className="text-2xl font-bold">Flight Cancellation Info</h1>
          <nav className="mt-2">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/demo" className="nav-link">Demo</Link>
            <Link href="/admin" className="nav-link">Admin</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-6">
        <h1 className="text-3xl font-bold mb-6">Demo Page</h1>
        
        <p className="mb-6">This is a demonstration of our flight cancellation information service. Select one of the sample cancelled flights below to see details.</p>
        
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex">
              <button
                onClick={() => setActiveTab('flights')}
                className={`py-2 px-4 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'flights'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Cancelled Flights
              </button>
              <button
                onClick={() => setActiveTab('how')}
                className={`py-2 px-4 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'how'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                How It Works
              </button>
            </nav>
          </div>
        </div>
        
        {activeTab === 'flights' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Sample Cancelled Flights</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Flight</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sampleFlights.map((flight) => (
                    <tr key={flight.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{flight.id}</div>
                        <div className="text-sm text-gray-500">{flight.airline}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{flight.from}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{flight.to}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <Link href={`/flight/${flight.id}`} className="btn">Details</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {activeTab === 'how' && (
          <div className="card">
            <h2 className="text-xl font-bold mb-4">How Our Service Works</h2>
            <ol className="list-decimal pl-5 space-y-4">
              <li>
                <strong>Flight Cancellation Detection</strong>
                <p>Our system receives real-time notifications from airline systems when a flight is cancelled.</p>
              </li>
              <li>
                <strong>Information Gathering</strong>
                <p>We automatically collect data about alternative flights, nearby hotels, and transportation options.</p>
              </li>
              <li>
                <strong>Compensation Analysis</strong>
                <p>Our system calculates potential compensation based on EU regulations and airline policies.</p>
              </li>
              <li>
                <strong>Personalized Recommendations</strong>
                <p>We provide tailored recommendations based on your specific situation and preferences.</p>
              </li>
            </ol>
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto">
          <p>© 2025 Flight Cancellation Info. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
