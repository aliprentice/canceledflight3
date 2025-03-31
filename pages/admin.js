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
          <div className="nav-container">
            <h1 className="text-2xl font-bold">Flight Cancellation Info</h1>
            <nav className="nav-links">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/demo" className="nav-link">Demo</Link>
              <Link href="/admin" className="nav-link">Admin</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-6">
        <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
        
        <div className="mb-6">
          <div className="tab-nav">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`tab-button ${activeTab === 'dashboard' ? 'active' : ''}`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('flights')}
              className={`tab-button ${activeTab === 'flights' ? 'active' : ''}`}
            >
              Flights
            </button>
            <button
              onClick={() => setActiveTab('simulate')}
              className={`tab-button ${activeTab === 'simulate' ? 'active' : ''}`}
            >
              Simulate
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`tab-button ${activeTab === 'settings' ? 'active' : ''}`}
            >
              Settings
            </button>
          </div>
        </div>
        
        {activeTab === 'dashboard' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Dashboard</h2>
            
            <div className="card-grid mb-6">
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
              <div className="table-container">
                <table className="responsive-table">
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Event</th>
                      <th>Flight</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>10:15 AM</td>
                      <td>Flight Cancelled</td>
                      <td>BA2490</td>
                      <td>
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Cancelled
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>09:42 AM</td>
                      <td>Booking Completed</td>
                      <td>LH2030</td>
                      <td>
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>08:30 AM</td>
                      <td>Flight Cancelled</td>
                      <td>AF1680</td>
                      <td>
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
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h3 className="font-bold mb-2 sm:mb-0">Cancelled Flights</h3>
                <button className="btn">Add Flight</button>
              </div>
              
              <div className="table-container">
                <table className="responsive-table">
                  <thead>
                    <tr>
                      <th>Flight</th>
                      <th>Route</th>
                      <th>Scheduled</th>
                      <th>Reason</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="font-medium">BA2490</div>
                        <div className="text-sm text-gray-500">British Airways</div>
                      </td>
                      <td>LHR → JFK</td>
                      <td>Mar 28, 10:15 AM</td>
                      <td>Operational issues</td>
                      <td>
                        <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                        <button className="text-red-600 hover:text-red-900">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="font-medium">AF1680</div>
                        <div className="text-sm text-gray-500">Air France</div>
                      </td>
                      <td>CDG → MAD</td>
                      <td>Mar 28, 2:30 PM</td>
                      <td>Technical issues</td>
                      <td>
                        <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                        <button className="text-red-600 hover:text-red-900">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="font-medium">LH2030</div>
                        <div className="text-sm text-gray-500">Lufthansa</div>
                      </td>
                      <td>FRA → FCO</td>
                      <td>Mar 28, 9:00 AM</td>
                      <td>Weather conditions</td>
                      <td>
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
            <h2 className="text-xl font-bold mb-4">Simulation Tools</h2>
            
            <div className="card">
              <h3 className="font-bold mb-4">Create Cancelled Flight</h3>
              <p className="mb-4">This will simulate a new flight cancellation in the system.</p>
              <button onClick={handleSimulate} className="btn mb-4">Run Simulation</button>
              
              {simulationStatus && (
                <div className="alert">{simulationStatus}</div>
              )}
            </div>
          </div>
        )}
        
        {activeTab === 'settings' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Settings</h2>
            
            <div className="card">
              <h3 className="font-bold mb-4">Notification Settings</h3>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Notifications
                </label>
                <select className="w-full border-gray-300 rounded-md shadow-sm p-2">
                  <option>All events</option>
                  <option>Cancellations only</option>
                  <option>None</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  SMS Notifications
                </label>
                <select className="w-full border-gray-300 rounded-md shadow-sm p-2">
                  <option>Urgent only</option>
                  <option>All events</option>
                  <option>None</option>
                </select>
              </div>
              
              <button className="btn">Save Settings</button>
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
