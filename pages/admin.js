import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [simulationStatus, setSimulationStatus] = useState(null);
  
  const handleSimulate = () => {
    setSimulationStatus('Simulation request sent. A new cancelled flight will appear in the demo shortly.');
    // In a real implementation, this would call the API endpoint
  };

  return (
    <div>
      <Head>
        <title>Admin - Flight Cancellation Information</title>
        <meta name="description" content="Admin panel for flight cancellation information service" />
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
        <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
        
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`py-2 px-4 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'dashboard'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('flights')}
                className={`py-2 px-4 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'flights'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Flights
              </button>
              <button
                onClick={() => setActiveTab('simulate')}
                className={`py-2 px-4 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'simulate'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Simulate
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`py-2 px-4 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'settings'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Settings
              </button>
            </nav>
          </div>
        </div>
        
        {activeTab === 'dashboard' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Dashboard</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="card bg-blue-50 border border-blue-100">
                <h3 className="font-bold text-blue-700">Active Flights</h3>
                <p className="text-3xl font-bold">24</p>
                <p className="text-sm text-blue-600">Currently being monitored</p>
              </div>
              
              <div className="card bg-red-50 border border-red-100">
                <h3 className="font-bold text-red-700">Cancelled Flights</h3>
                <p className="text-3xl font-bold">3</p>
                <p className="text-sm text-red-600">In the last 24 hours</p>
              </div>
              
              <div className="card bg-green-50 border border-green-100">
                <h3 className="font-bold text-green-700">Affiliate Revenue</h3>
                <p className="text-3xl font-bold">$1,240</p>
                <p className="text-sm text-green-600">This month</p>
              </div>
            </div>
            
            <div className="card">
              <h3 className="font-bold mb-4">Recent Activity</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Flight</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10:15 AM</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Flight Cancelled</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">BA2490</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Cancelled
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">09:42 AM</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Booking Completed</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">LH2030</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">08:30 AM</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Flight Cancelled</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">AF1680</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Cancelled
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'flights' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Flight Management</h2>
            
            <div className="card mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">Cancelled Flights</h3>
                <button className="btn">Add Flight</button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Flight</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Scheduled</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">BA2490</div>
                        <div className="text-sm text-gray-500">British Airways</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">LHR → JFK</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mar 28, 10:15 AM</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Operational issues</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                        <button className="text-red-600 hover:text-red-900">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">AF1680</div>
                        <div className="text-sm text-gray-500">Air France</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">CDG → MAD</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mar 28, 2:30 PM</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Technical issues</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                        <button className="text-red-600 hover:text-red-900">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">LH2030</div>
                        <div className="text-sm text-gray-500">Lufthansa</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">FRA → FCO</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mar 28, 9:00 AM</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Weather conditions</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                        <button className="text-red-600 hover:text-red-900">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'simulate' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Simulate Flight Cancellation</h2>
            
            <div className="card mb-6">
              <p className="mb-4">Use this tool to simulate a flight cancellation notification from the SITA API. This will create a new cancelled flight entry in the system.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Airline</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                    <option>British Airways</option>
                    <option>Air France</option>
                    <option>Lufthansa</option>
                    <option>KLM</option>
                    <option>Iberia</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Flight Number</label>
                  <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2" placeholder="e.g. BA123" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Origin</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                    <option>London (LHR)</option>
                    <option>Paris (CDG)</option>
                    <option>Frankfurt (FRA)</option>
                    <option>Amsterdam (AMS)</option>
                    <option>Madrid (MAD)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                    <option>New York (JFK)</option>
                    <option>Madrid (MAD)</option>
                    <option>Rome (FCO)</option>
                    <option>Barcelona (BCN)</option>
                    <option>Berlin (BER)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Scheduled Departure</label>
                  <input type="datetime-local" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cancellation Reason</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                    <option>Operational issues</option>
                    <option>Technical issues</option>
                    <option>Weather conditions</option>
                    <option>Air traffic restrictions</option>
                    <option>Crew availability</option>
                  </select>
                </div>
              </div>
              
              <button className="btn" onClick={handleSimulate}>Simulate Cancellation</button>
              
              {simulationStatus && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded">
                  {simulationStatus}
                </div>
              )}
            </div>
          </div>
        )}
        
        {activeTab === 'settings' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Settings</h2>
            
            <div className="card mb-6">
              <h3 className="font-bold mb-4">API Configuration</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">SITA API Key</label>
                <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2" value="Ebz55A1CoNTqtzpPQulPl2c29I2lq1qa" readOnly />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">SITA API Secret</label>
                <input type="password" className="w-full border border-gray-300 rounded-md px-3 py-2" value="••••••••••••" readOnly />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Webhook URL</label>
                <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2" value="https://canceledflight.com/api/webhook" readOnly />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Region Filter</label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                  <option>Europe Only</option>
                  <option>North America Only</option>
                  <option>Asia Only</option>
                  <option>All Regions</option>
                </select>
              </div>
              
              <button className="btn">Save Settings</button>
            </div>
            
            <div className="card">
              <h3 className="font-bold mb-4">Affiliate Settings</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Hotel Affiliate ID</label>
                <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2" placeholder="e.g. booking-123456" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Flight Affiliate ID</label>
                <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2" placeholder="e.g. expedia-123456" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Transportation Affiliate ID</label>
                <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2" placeholder="e.g. uber-123456" />
              </div>
              
              <button className="btn">Save Affiliate Settings</button>
            </div>
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
