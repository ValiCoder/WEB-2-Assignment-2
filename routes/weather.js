const express = require('express');
const axios = require('axios');
const router = express.Router();

async function getWeather(city = 'Astana') {
    try {
        const apiKey = process.env.OPENWEATHER_API_KEY;
        
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: city,
                appid: apiKey,
                units: 'metric'
            }
        });
        
        const data = response.data;
        
        return {
            City: data.name,
            Country: data.sys.country,
            Temperature: `${Math.round(data.main.temp)}°C`,
            Feels_Like: `${Math.round(data.main.feels_like)}°C`,
            Condition: data.weather[0].description,
            Humidity: `${data.main.humidity}%`,
            Wind_Speed: `${data.wind.speed} m/s`,
            Coordinates: {
                lat: data.coord.lat,
                lon: data.coord.lon
            }
        };
        
    } catch (error) {
        console.error('Error fetching weather:', error.message);
        return null;
    }
}

router.get('/', async (req, res) => {
    try {
        const city = req.query.city || 'Astana';
        const weatherData = await getWeather(city);
        
        if (weatherData) {
            res.json(weatherData);
        } else {
            res.status(500).json({ error: 'Failed to fetch weather data' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;