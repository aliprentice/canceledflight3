// This is a simplified API endpoint for the webhook
// In production, this would validate the SITA API signature and process the data

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body;
      
      // Log the incoming webhook data
      console.log('Received webhook data:', data);
      
      // Check if this is a flight cancellation
      if (data.status !== 'CANCELLED') {
        return res.status(200).json({ 
          success: true, 
          message: 'Notification received but not a cancellation' 
        });
      }
      
      // Check if the flight is in Europe (origin or destination)
      const europeanAirports = [
        'LHR', 'CDG', 'FRA', 'AMS', 'MAD', 'FCO', 'BCN', 'LGW', 'MUC', 
        'ORY', 'DUB', 'ZRH', 'CPH', 'OSL', 'ARN', 'VIE', 'BRU', 'ATH'
      ];
      
      const isEuropean = 
        europeanAirports.includes(data.origin) || 
        europeanAirports.includes(data.destination);
      
      if (!isEuropean) {
        return res.status(200).json({ 
          success: true, 
          message: 'Flight is not in Europe, ignoring' 
        });
      }
      
      // In a real implementation, we would:
      // 1. Store the flight cancellation in a database
      // 2. Generate a dedicated page for this flight
      // 3. Send notifications to affected travelers
      
      return res.status(200).json({ 
        success: true, 
        message: 'European flight cancellation processed successfully',
        flightId: data.flightNumber
      });
      
    } catch (error) {
      console.error('Error processing webhook:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'Error processing webhook' 
      });
    }
  } else {
    // Handle GET requests (for testing)
    res.status(200).json({ 
      success: true, 
      message: 'Webhook endpoint is active. Send a POST request to test.' 
    });
  }
}
