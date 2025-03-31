// This is a simplified API endpoint for simulating flight cancellations
// In production, this would create a real entry in the database

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { airline, flightNumber, origin, destination, reason } = req.body;
      
      // Validate required fields
      if (!airline || !flightNumber || !origin || !destination || !reason) {
        return res.status(400).json({
          success: false,
          message: 'Missing required fields'
        });
      }
      
      // In a real implementation, we would:
      // 1. Create a new flight cancellation entry in the database
      // 2. Generate a dedicated page for this flight
      // 3. Process as if it came from the SITA webhook
      
      console.log('Simulating flight cancellation:', {
        airline,
        flightNumber,
        origin,
        destination,
        reason,
        status: 'CANCELLED'
      });
      
      return res.status(200).json({
        success: true,
        message: 'Flight cancellation simulated successfully',
        flightId: flightNumber
      });
      
    } catch (error) {
      console.error('Error simulating cancellation:', error);
      return res.status(500).json({
        success: false,
        message: 'Error simulating cancellation'
      });
    }
  } else {
    res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }
}
