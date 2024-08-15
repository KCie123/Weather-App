const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherbox = document.querySelector('.weather-box');
const weatherdetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found')

search.addEventListener('click', () =>{
    const APIKey = 'f9c273b51918b8fc39e0febc1042a86e';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIKey}`)
    .then(response => response.json()).then(json => {
        
        if(json.cod === '404'){
            container.computedStyleMap.height = '400px';
            weatherbox.computedStyleMap.display = 'none';
            weatherdetails.style.display = 'block';
            error404.style.display = 'block';
            error404.classList.add('fadein');
            return;
        }

        error404.style.display = 'none';
        error404.classList.remove('fadein');

        const image = document.querySelector('.weather-box img')
        const temperature = document.querySelector('.weather-box .temperature')
        const description = document.querySelector('.weather-box .description')
        const humidity = document.querySelector('.weather-details .humidity span')
        const wind = document.querySelector('.weather-details .wind span')

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

            case 'Haze':
                image.src = 'images/mist.png';
                break;

            case 'Mist':
                image.src = 'images/mist.png';
                break;

            case 'Drizzle':
                image.src = 'images/drizzle.png';
                break;

            default:
                image.src = '';
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°F</span>`
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Mp/h`;

        weatherbox.style.display = '';
        weatherdetails.style.display = '';
        weatherbox.classList.add('fadein');
        weatherdetails.classList.add('fadein');
        container.style.height = '590px';


    })
})