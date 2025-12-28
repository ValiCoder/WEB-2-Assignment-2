const express = require('express');
const axios = require('axios'); 
const router = express.Router();

async function getExRates(baseCurrency = 'USD') {
    try { 
        const apiKey = process.env.EXCHANGERATE_API_KEY;

        const response = await axios.get(
            `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`
        );
        
        const data = response.data;
        
        return {
            baseCurrency: data.base_code,
            lastUpdated: data.time_last_update_utc,
            rates: {
                USD: data.conversion_rates.USD,
                EUR: data.conversion_rates.EUR,
                KZT: data.conversion_rates.KZT,
                RUB: data.conversion_rates.RUB,
                CNY: data.conversion_rates.CNY
            }
        };
    } catch (error) {
        console.error('Error fetching exchange rates:', error.message);
        return null;
    }
}

router.get('/', async (req, res) => {
    try {
        const baseCurrency = req.query.base || 'USD';
        const rates = await getExRates(baseCurrency);
        
        if (rates) {
            res.json(rates);
        } else {
            res.status(500).json({ error: 'Failed to fetch exchange rates' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/convert', async (req, res) => {
    try {
        const { from, to, amount } = req.query;
        
        if (!from || !to || !amount) {
            return res.status(400).json({ 
                error: 'Missing parameters. Required: from, to, amount' 
            });
        }
        
        const apiKey = process.env.EXCHANGERATE_API_KEY;
        const response = await axios.get(
            `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`
        );
        
        const data = response.data;
        res.json({
            from: data.base_code,
            to: data.target_code,
            amount: parseFloat(amount),
            converted: data.conversion_result,
            rate: data.conversion_rate,
            time: data.time_last_update_utc
        });
        
    } catch (error) {
        console.error('Conversion error:', error.message);
        res.status(500).json({ error: 'Failed to convert currency' });
    }
});

module.exports = router;