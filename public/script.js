// Когда страница загружена
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Проверка статуса API
    fetch('/api/status')
        .then(response => response.json())
        .then(data => {
            document.getElementById('api-status').textContent = data.status;
            document.getElementById('api-status').style.color = 'green';
        })
        .catch(error => {
            document.getElementById('api-status').textContent = 'Error';
            document.getElementById('api-status').style.color = 'red';
        });
    
    // 2. Загрузка погоды (только Астана)
    fetch('/api/weather')
        .then(response => response.json())
        .then(data => {
            const weatherDiv = document.getElementById('weather-data');
            weatherDiv.innerHTML = `
                <div class="data-item"><strong>City:</strong> ${data.City}</div>
                <div class="data-item"><strong>Temperature:</strong> ${data.Temperature}</div>
                <div class="data-item"><strong>Feels Like:</strong> ${data.Feels_Like}</div>
                <div class="data-item"><strong>Condition:</strong> ${data.Condition}</div>
                <div class="data-item"><strong>Humidity:</strong> ${data.Humidity}</div>
                <div class="data-item"><strong>Wind:</strong> ${data.Wind_Speed}</div>
                <div class="data-item"><strong>Country:</strong> ${data.Country}</div>
            `;
        })
        .catch(error => {
            document.getElementById('weather-data').innerHTML = 
                '<p style="color: red;">Error loading weather data</p>';
        });
    
    // 3. Загрузка курсов валют
    fetch('/api/exrates')
        .then(response => response.json())
        .then(data => {
            const currencyDiv = document.getElementById('currency-data');
            
            let ratesHTML = `<div class="data-item"><strong>Base Currency:</strong> ${data.baseCurrency}</div>`;
            
            // Показываем только основные валюты
            const mainCurrencies = ['USD', 'EUR', 'KZT', 'RUB', 'GBP', 'CNY'];
            
            mainCurrencies.forEach(currency => {
                if (data.rates[currency]) {
                    ratesHTML += `
                        <div class="data-item">
                            <strong>${currency}:</strong> ${data.rates[currency].toFixed(4)}
                        </div>
                    `;
                }
            });
            
            currencyDiv.innerHTML = ratesHTML;
        })
        .catch(error => {
            document.getElementById('currency-data').innerHTML = 
                '<p style="color: red;">Error loading currency data</p>';
        });
});