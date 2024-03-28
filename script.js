const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {

    const APIKey = '4018e80e5cc36da623e2f17fa9e00826';
    const city = document.querySelector('.search-box input').value;

    if (city == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&unites=metric&appid=${APIKey}`).then(response => response.json()).then(json => {

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'images/clear.png';                
                break;
        
            case 'Rain':
                image.src = 'images/rain.png';                
                break;
            
            case 'Snow':
                image.src = 'images/snow.png';                
                break;
            
            case 'Clouds':
                image.src = 'images/cloud.png';
                break;
            
            
                
            default:
                break;
        }

    });

});