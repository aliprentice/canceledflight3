// This is a simplified API endpoint for listing all flights
// In production, this would fetch data from a database

export default function handler(req, res) {
  // Hardcoded flight data for demo purposes
  const flights = [
    {
      id: 'BA2490',
      airline: 'British Airways',
      from: 'London (LHR)',
      to: 'New York (JFK)',
      status: 'CANCELLED',
      reason: 'Operational issues'
    },
    {
      id: 'AF1680',
      airline: 'Air France',
      from: 'Paris (CDG)',
      to: 'Madrid (MAD)',
      status: 'CANCELLED',
      reason: 'Technical issues'
    },
    {
      id: 'LH2030',
      airline: 'Lufthansa',
      from: 'Frankfurt (FRA)',
      to: 'Rome (FCO)',
      status: 'CANCELLED',
      reason: 'Weather conditions'
    }
  ];
  
  return res.status(200).json({ 
    success: true, 
    data: flights 
  });
}
