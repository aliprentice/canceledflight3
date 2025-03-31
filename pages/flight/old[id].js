import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function FlightDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [activeTab, setActiveTab] = useState('hotels');
  const [flight, setFlight] = useState(null);
  
  useEffect(() => {
    if (!id) return;
    
    // For simplicity, we're using hardcoded data instead of API calls
    const flightData = {
      'BA2490': {
        airline: 'British Airways',
        flightNumber: 'BA2490',
        origin: 'LHR',
        originCity: 'London',
        destination: 'JFK',
        destinationCity: 'New York',
        scheduledDeparture: 'Fri, Mar 28, 10:15 AM',
        scheduledArrival: 'Fri, Mar 28, 1:45 PM',
        status: 'CANCELLED',
        reason: 'Operational issues',
        compensation: '€600',
        requirements: 'Flight cancelled less than 14 days before departure'
      },
      'AF1680': {
        airline: 'Air France',
        flightNumber: 'AF1680',
        origin: 'CDG',
        originCity: 'Paris',
        destination: 'MAD',
        destinationCity: 'Madrid',
        scheduledDeparture: 'Fri, Mar 28, 2:30 PM',
        scheduledArrival: 'Fri, Mar 28, 4:45 PM',
        status: 'CANCELLED',
        reason: 'Technical issues',
        compensation: '€250',
        requirements: 'Flight cancelled less than 14 days before departure'
      },
      'LH2030': {
        airline: 'Lufthansa',
        flightNumber: 'LH2030',
        origin: 'FRA',
        originCity: 'Frankfurt',
        destination: 'FCO',
        destinationCity: 'Rome',
        scheduledDeparture: 'Fri, Mar 28, 9:00 AM',
        scheduledArrival: 'Fri, Mar 28, 11:15 AM',
        status: 'CANCELLED',
        reason: 'Weather conditions',
        compensation: '€400',
        requirements: 'Flight cancelled less than 14 days before departure'
      }
    };
    
    setFlight(flightData[id] || null);
  }, [id]);
  
  if (!flight) {
    return <div className="container mx-auto py-6">Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>{flight.flightNumber} - Cancelled Flight Information</title>
        <meta name="description" content={`Information about cancelled flight ${flight.flightNumber}`} />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4">
          <Link href="/" className="text-2xl font-bold">Flight Cancellation Info</Link>
          <nav className="mt-2">
            <Link href="/demo" className="nav-link">Demo</Link>
            <Link href="/admin" className="nav-link">Admin</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-6">
        <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h2 className="text-lg font-medium text-red-700">Flight Cancelled</h2>
              <p className="text-sm text-red-700">We're sorry, but your flight has been cancelled. We've provided alternative options below.</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">
            <span className="inline-block mr-2">✈️</span>
            {flight.airline} Flight {flight.flightNumber}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="card">
              <div className="text-lg font-bold">{flight.origin}</div>
              <div className="text-gray-600">{flight.originCity}</div>
              
              <div className="mt-2">
                <div className="font-medium">Scheduled Departure</div>
                <div>{flight.scheduledDeparture}</div>
              </div>
            </div>
            
            <div className="card">
              <div className="text-lg font-bold">{flight.destination}</div>
              <div className="text-gray-600">{flight.destinationCity}</div>
              
              <div className="mt-2">
                <div className="font-medium">Scheduled Arrival</div>
                <div>{flight.scheduledArrival}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Cancellation Information</h3>
          <div className="card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="font-medium">Status:</div>
                <div className="cancelled">CANCELLED</div>
              </div>
              <div>
                <div className="font-medium">Reason:</div>
                <div>{flight.reason}</div>
              </div>
              <div>
                <div className="font-medium">Compensation Eligibility:</div>
                <div className="text-green-600 font-bold">{flight.compensation}</div>
              </div>
              <div>
                <div className="font-medium">Requirements:</div>
                <div>{flight.requirements}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card p-4 mb-6 bg-purple-50 border border-purple-100">
          <button className="w-full flex items-center justify-center py-2 text-purple-700">
            <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Enable Location for Nearby Options
          </button>
        </div>
        
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex">
              <button
                onClick={() => setActiveTab('hotels')}
                className={`py-2 px-4 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'hotels'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="inline-block mr-1">🏨</span> Hotel Options
              </button>
              <button
                onClick={() => setActiveTab('flights')}
                className={`py-2 px-4 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'flights'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="inline-block mr-1">✈️</span> Alternative Flights
              </button>
              <button
                onClick={() => setActiveTab('transport')}
                className={`py-2 px-4 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'transport'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="inline-block mr-1">🚕</span> Transportation
              </button>
              <button
                onClick={() => setActiveTab('compensation')}
                className={`py-2 px-4 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'compensation'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="inline-block mr-1">💰</span> Compensation
              </button>
            </nav>
          </div>
        </div>
        
        {activeTab === 'hotels' && (
          <div>
            <h3 className="text-lg font-bold mb-4">Nearby Hotels</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card">
                <div className="flex">
                  <div className="bg-gray-200 w-24 h-24 flex-shrink-0"></div>
                  <div className="ml-4">
                    <h4 className="font-bold">Airport Grand Hotel</h4>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-yellow-200">★</span>
                      </div>
                      <span className="ml-1">4.5</span>
                    </div>
                    <p className="text-sm text-gray-600">0.8 miles from airport</p>
                    <p className="text-sm">Free WiFi, Airport Shuttle, Restaurant</p>
                    <button className="btn mt-2">Book Now</button>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="flex">
                  <div className="bg-gray-200 w-24 h-24 flex-shrink-0"></div>
                  <div className="ml-4">
                    <h4 className="font-bold">Skyway Inn</h4>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        <span>★</span><span>★</span><span>★</span><span className="text-yellow-200">★</span><span className="text-yellow-200">★</span>
                      </div>
                      <span className="ml-1">3.8</span>
                    </div>
                    <p className="text-sm text-gray-600">1.2 miles from airport</p>
                    <p className="text-sm">Free WiFi, Breakfast Included</p>
                    <button className="btn mt-2">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'flights' && (
          <div>
            <h3 className="text-lg font-bold mb-4">Alternative Flights</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Airline</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Flight</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Departure</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">American Airlines</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">AA100</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Today, 2:30 PM</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$450</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="btn">Book Now</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Delta</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">DL456</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Today, 5:15 PM</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$380</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="btn">Book Now</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">United</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">UA789</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Tomorrow, 8:00 AM</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$320</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="btn">Book Now</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {activeTab === 'transport' && (
          <div>
            <h3 className="text-lg font-bold mb-4">Transportation Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="card">
                <h4 className="font-bold">Taxi</h4>
                <p className="text-sm text-gray-600">Available 24/7</p>
                <p className="text-sm">Estimated cost: $35-45</p>
                <p className="text-sm">Travel time: 25 min</p>
                <button className="btn mt-2">Book Now</button>
              </div>
              
              <div className="card">
                <h4 className="font-bold">Shuttle Bus</h4>
                <p className="text-sm text-gray-600">Departs every 30 min</p>
                <p className="text-sm">Cost: $12 per person</p>
                <p className="text-sm">Travel time: 40 min</p>
                <button className="btn mt-2">Book Now</button>
              </div>
              
              <div className="card">
                <h4 className="font-bold">Public Transport</h4>
                <p className="text-sm text-gray-600">Subway + Bus</p>
                <p className="text-sm">Cost: $5 per person</p>
                <p className="text-sm">Travel time: 55 min</p>
                <button className="btn mt-2">View Route</button>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'compensation' && (
          <div>
            <h3 className="text-lg font-bold mb-4">Compensation Information</h3>
            <div className="card">
              <h4 className="font-bold mb-2">EU Regulation 261/2004</h4>
              <p className="mb-4">Under EU regulations, you may be entitled to compensation of {flight.compensation} for your cancelled flight.</p>
              
              <h4 className="font-bold mb-2">Your Rights</h4>
              <ul className="list-disc pl-5 mb-4">
                <li>Reimbursement or re-routing</li>
                <li>Meals and refreshments</li>
                <li>Hotel accommodation if necessary</li>
                <li>Transport between the airport and hotel</li>
                <li>Two free phone calls, emails, or faxes</li>
              </ul>
              
              <h4 className="font-bold mb-2">How to Claim</h4>
              <p className="mb-4">To claim your compensation, you need to contact the airline directly. We've prepared a template letter for you to use.</p>
              
              <button className="btn">Download Claim Template</button>
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
