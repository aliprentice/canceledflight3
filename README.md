# Flight Cancellation Information Site

This is a simplified version of the Flight Cancellation Information Site, designed for easy deployment on Vercel. The site provides real-time information to travelers who have had their flights cancelled, with a focus on European flights.

## Features

- Mobile-first design for fast loading on mobile devices
- Webhook integration with SITA Flight-Data-Global-Trial API
- Europe-only filtering for flight cancellations
- Detailed flight information pages with:
  - Hotel options with affiliate links
  - Alternative flight suggestions with affiliate links
  - Transportation options with affiliate links
  - EU compensation information
- Admin panel for managing flight data and simulating cancellations

## Deployment Instructions

1. Deploy this project to Vercel:
   - Sign up/log in at vercel.com
   - Create a new project and import this repository
   - Set the following environment variables:
     - SITA_CONSUMER_KEY: Ebz55A1CoNTqtzpPQulPl2c29I2lq1qa
     - SITA_CONSUMER_SECRET: rdXEmJnjAuVzAJH9
   - Deploy the project

2. Connect your domain (canceledflight.com):
   - In your Vercel project settings, go to "Domains"
   - Add your domain and follow the verification steps

3. Register your webhook with SITA:
   - Log in to the SITA Developer Portal
   - Navigate to your Webanalystpro-Flight-Data-Global-Trial application
   - Register your webhook URL: https://canceledflight.com/api/webhook
   - Configure it to receive flight cancellation events

## Customization

### Adding Affiliate Links

To add your affiliate links, edit the following files:

- `/pages/api/flights/[id].js` - Contains hotel, flight, and transportation affiliate links
- `/pages/flight/[id].js` - Contains the frontend display of these links

### Styling Changes

The site uses a combination of custom CSS and inline styles:

- `/styles/globals.css` - Main styling file
- Individual page components contain inline styles

## File Structure

- `/pages` - All page components and API routes
  - `/pages/index.js` - Homepage
  - `/pages/demo.js` - Demo page with sample cancelled flights
  - `/pages/flight/[id].js` - Dynamic flight details page
  - `/pages/admin.js` - Admin panel
  - `/pages/api/` - API endpoints
- `/styles` - CSS files
- `/public` - Static assets

## Contact

For any questions or customization needs, please contact the developer.
