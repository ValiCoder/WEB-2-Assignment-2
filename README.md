# WEB-2-Assignment-2


#Weather API

<img width="499" height="441" alt="image" src="https://github.com/user-attachments/assets/5dfe6c3a-fdb7-480d-9a43-9ba90f8a71c4" />

#ExchangeRates API

<img width="548" height="429" alt="image" src="https://github.com/user-attachments/assets/d399afef-0e3c-444e-a494-e3ee1333a97f" />

#News API 

<img width="1738" height="631" alt="image" src="https://github.com/user-attachments/assets/f708e88c-bbfa-4728-b777-29dfdad93fa2" />

# Weather & Currency Dashboard

Backend API integration project displaying real-time weather and financial data.

## Project Description

A Node.js web application that retrieves and displays current weather conditions in Astana and live currency exchange rates. All third-party API calls are handled server-side for security and performance.

## Features

- Current weather data for Astana (temperature, humidity, wind speed, etc.)
- Real-time currency exchange rates
- Latest news headlines
- Server-side API integration
- Responsive web interface

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, JavaScript
- **APIs**: OpenWeather API, ExchangeRate API, NewsAPI
- **Other**: Axios, CORS, dotenv

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd WEB2Assignment2
Install dependencies:

bash
npm install
Create a .env file in the root directory:

env
PORT=3000
OPENWEATHER_API_KEY=your_key_here
EXCHANGERATE_API_KEY=your_key_here
NEWS_API_KEY=your_key_here
Start the server:

bash
node server.js
Open browser and navigate to:

text
http://localhost:3000
API Endpoints
GET / - Main page

GET /api/status - API status check

GET /api/weather - Weather data for Astana

GET /api/currency - Currency exchange rates

GET /api/news - Latest news headlines

Project Structure
text
WEB2Assignment2/
├── public/           # Frontend files
│   ├── index.html
│   ├── style.css
│   └── script.js
├── routes/           # API route handlers
│   ├── weather.js
│   ├── currency.js
│   └── news.js
├── server.js         # Main server file
├── package.json      # Dependencies
├── .env              # Environment variables
└── README.md         # Documentation
Assignment Requirements Completed
✅ Server-side weather API integration with all required fields

✅ Additional API integration (currency exchange)

✅ Third API integration (news headlines)

✅ Clean, organized code structure

✅ Responsive user interface

✅ Proper error handling

✅ Environment variable configuration

Notes
All third-party API calls are made from the server to protect API keys

The application includes fallback data if APIs are unavailable

CORS is enabled for frontend-backend communication

Error handling implemented at multiple levels
