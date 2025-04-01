# SITA Webhook Implementation with MongoDB Atlas

This directory contains all the necessary files to implement SITA webhook integration with MongoDB Atlas for the Flight Cancellation Information service.

## Files Structure

- `models/Flight.js` - MongoDB schema for flight data
- `lib/dbConnect.js` - Utility for connecting to MongoDB Atlas
- `pages/api/webhook.js` - Webhook endpoint for receiving SITA flight cancellation data
- `pages/api/flights/index.js` - API route for retrieving all cancelled flights
- `pages/api/flights/[id].js` - API route for retrieving a specific flight by ID
- `pages/api/admin/simulate.js` - Endpoint for simulating flight cancellations (for testing)

## Installation

1. Copy these files to your Next.js project, maintaining the directory structure
2. Install required dependencies:
   ```
   npm install mongoose crypto
   ```

## Configuration

1. Create a `.env.local` file in your project root with:
   ```
   MONGODB_URI=mongodb+srv://aprentice:<db_dEJcrQUmEodrwgeq>@cluster0.uarhn3a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   SITA_WEBHOOK_SECRET=your_sita_webhook_secret
   ```

2. In production, update the webhook.js file to uncomment the signature verification code

## Usage

- SITA webhook will receive data at: `https://your-domain.com/api/webhook`
- Retrieve all cancelled flights: `GET /api/flights`
- Retrieve a specific flight: `GET /api/flights/[flightNumber]`
- Simulate a cancellation: `POST /api/admin/simulate` with flight data

## Security Notes

- In production, always verify the SITA webhook signature
- Secure the admin/simulate endpoint with proper authentication
- Consider adding rate limiting to the webhook endpoint
