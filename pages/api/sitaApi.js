// Fix the path to sitaApi.js
import axios from 'axios';
import crypto from 'crypto';

// SITA API credentials
const CONSUMER_KEY = 'Ebz55A1CoNTqtzpPQulPl2c29I2lq1qa';
const CONSUMER_SECRET = 'rdXEmJnjAuVzAJH9';
const BASE_URL = 'https://api.sita.aero/flightdata/v1';

// Generate OAuth 1.0a signature
function generateOAuthSignature(method, url, params) {
  // Create parameter string
  const paramString = Object.keys(params)
    .sort()
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
  
  // Create signature base string
  const signatureBaseString = `${method.toUpperCase()}&${encodeURIComponent(url)}&${encodeURIComponent(paramString)}`;
  
  // Create signing key
  const signingKey = `${encodeURIComponent(CONSUMER_SECRET)}&`;
  
  // Generate signature
  const signature = crypto
    .createHmac('sha1', signingKey)
    .update(signatureBaseString)
    .digest('base64');
  
  return signature;
}

// Generate OAuth 1.0a header
function generateOAuthHeader(method, url, params = {}) {
  const timestamp = Math.floor(Date.now() / 1000);
  const nonce = crypto.randomBytes(16).toString('hex');
  
  const oauthParams = {
    oauth_consumer_key: CONSUMER_KEY,
    oauth_nonce: nonce,
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: timestamp,
    oauth_version: '1.0',
    ...params
  };
  
  const signature = generateOAuthSignature(method, url, oauthParams);
  oauthParams.oauth_signature = signature;
  
  const headerValue = Object.keys(oauthParams)
    .map(key => `${encodeURIComponent(key)}="${encodeURIComponent(oauthParams[key])}"`)
    .join(', ');
  
  return `OAuth ${headerValue}`;
}

// Fetch flight information from SITA API
export async function fetchFlightInfo(flightNumber, date) {
  try {
    const endpoint = `${BASE_URL}/flights/${flightNumber}`;
    const params = { date };
    const authHeader = generateOAuthHeader('GET', endpoint, params);
    
    const response = await axios.get(endpoint, {
      params,
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching flight info from SITA API:', error);
    throw error;
  }
}

// Fetch cancelled flights for a specific date range
export async function fetchCancelledFlights(startDate, endDate, region = 'europe') {
  try {
    const endpoint = `${BASE_URL}/flights/cancelled`;
    const params = { 
      startDate, 
      endDate,
      region
    };
    const authHeader = generateOAuthHeader('GET', endpoint, params);
    
    const response = await axios.get(endpoint, {
      params,
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching cancelled flights from SITA API:', error);
    throw error;
  }
}

// Subscribe to flight cancellation notifications
export async function subscribeToFlightCancellations(webhookUrl, region = 'europe') {
  try {
    const endpoint = `${BASE_URL}/notifications/subscribe`;
    const data = {
      eventType: 'flight.cancelled',
      callbackUrl: webhookUrl,
      filters: {
        region
      }
    };
    const authHeader = generateOAuthHeader('POST', endpoint);
    
    const response = await axios.post(endpoint, data, {
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error subscribing to flight cancellations:', error);
    throw error;
  }
}

export default {
  fetchFlightInfo,
  fetchCancelledFlights,
  subscribeToFlightCancellations
};
