function getWeather() {
    var city = document.getElementById('cityInput').value;

    // Simulated weather data
    var weatherData = {
        weatherDescription: "Partly Cloudy",
        temperature: 25,
        humidity: 60,
        windSpeed: 5
    };

    var weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
        <p>City: ${city}</p>
        <p>Description: ${weatherData.weatherDescription}</p>
        <p>Temperature: ${weatherData.temperature}°C</p>
        <p>Humidity: ${weatherData.humidity}%</p>
        <p>Wind Speed: ${weatherData.windSpeed} m/s</p>
    `;
}
