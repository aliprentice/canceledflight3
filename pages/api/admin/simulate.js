import Flight from '../../../models/Flight';
import dbConnect from '../../../lib/dbConnect';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }
  
  try {
    const { airline, flightNumber, origin, destination, reason } = req.body;
    
    // Validate required fields
    if (!airline || !flightNumber || !origin || !destination || !reason) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }
    
    await dbConnect();
    
    // Create a new flight cancellation entry
    const flight = new Flight({
      flightNumber,
      airline,
      origin,
      destination,
      scheduledDeparture: new Date(),
      status: 'CANCELLED',
      reason,
      updatedAt: new Date(),
      createdAt: new Date()
    });
    
    await flight.save();
    
    console.log('Simulated flight cancellation:', flight);
    
    return res.status(200).json({
      success: true,
      message: 'Flight cancellation simulated successfully',
      flightId: flight._id
    });
    
  } catch (error) {
    console.error('Error simulating cancellation:', error);
    return res.status(500).json({
      success: false,
      message: 'Error simulating cancellation',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
