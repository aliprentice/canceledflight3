// This is a simplified API endpoint for flight details
// In production, this would fetch data from a database

export default function handler(req, res) {
  const { id } = req.query;
  
  // Hardcoded flight data for demo purposes
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
  
  const flight = flightData[id];
  
  if (!flight) {
    return res.status(404).json({ 
      success: false, 
      message: 'Flight not found' 
    });
  }
  
  // Add hotel options
  flight.hotels = [
    {
      name: 'Airport Grand Hotel',
      distance: 0.8,
      price: 120,
      amenities: ['Free WiFi', 'Airport Shuttle', 'Restaurant'],
      rating: 4.5,
      bookingUrl: 'https://booking.com/hotel/us/airport-grand?aid=YOUR_AFFILIATE_ID'
    },
    {
      name: 'Skyway Inn',
      distance: 1.2,
      price: 85,
      amenities: ['Free WiFi', 'Breakfast Included'],
      rating: 3.8,
      bookingUrl: 'https://booking.com/hotel/us/skyway-inn?aid=YOUR_AFFILIATE_ID'
    }
  ];
  
  // Add alternative flights
  flight.alternativeFlights = [
    {
      airline: 'American Airlines',
      flightNumber: 'AA100',
      departure: 'Today, 2:30 PM',
      price: 450,
      bookingUrl: 'https://expedia.com/flights/LHR-to-JFK?affiliate=YOUR_AFFILIATE_ID'
    },
    {
      airline: 'Delta',
      flightNumber: 'DL456',
      departure: 'Today, 5:15 PM',
      price: 380,
      bookingUrl: 'https://expedia.com/flights/LHR-to-JFK?affiliate=YOUR_AFFILIATE_ID'
    },
    {
      airline: 'United',
      flightNumber: 'UA789',
      departure: 'Tomorrow, 8:00 AM',
      price: 320,
      bookingUrl: 'https://expedia.com/flights/LHR-to-JFK?affiliate=YOUR_AFFILIATE_ID'
    }
  ];
  
  // Add transportation options
  flight.transportation = [
    {
      type: 'Taxi',
      availability: 'Available 24/7',
      cost: '$35-45',
      travelTime: '25 min',
      bookingUrl: 'https://uber.com/?affiliate=YOUR_AFFILIATE_ID'
    },
    {
      type: 'Shuttle Bus',
      availability: 'Departs every 30 min',
      cost: '$12 per person',
      travelTime: '40 min',
      bookingUrl: 'https://shuttleservice.com/?affiliate=YOUR_AFFILIATE_ID'
    },
    {
      type: 'Public Transport',
      availability: 'Subway + Bus',
      cost: '$5 per person',
      travelTime: '55 min',
      bookingUrl: 'https://maps.google.com/?affiliate=YOUR_AFFILIATE_ID'
    }
  ];
  
  return res.status(200).json({ 
    success: true, 
    data: flight 
  });
}
