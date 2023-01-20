API_key = "0f6cba87574217ecc406002c63062e05";//CLAVE PERSONAL DEL API 
const buttonform = document.querySelector("button[type='submit']");
const container_cards = document.getElementById("weather_cards_container");

buttonform.addEventListener("click", getWeatherInfo);

const getData = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;
    return fetch(url).then((data) => data.json());//FETCH devuelve promesa, SI ES RESUELTA(se ejecuta THEN(), sino CATCH)
  }//funcion con PARAMENTRO data
  //data toma el valor devuelto del FETCH()
  //.JSON convierte

function getWeatherInfo() {
  const input = document.getElementById("input");
  getData(input.value)
    .then((data) => {
        const card_weather=document.createElement('div')
        card_weather.className='bg-purple-800 rounded-lg h-44 w-36 grid place-items-center'
        
        const nameLog = document.createElement("h3");
        nameLog.className = "text-white text-2xl";
        nameLog.innerHTML = `${data.name}`;
  
        const tempLog = document.createElement("h1");
        tempLog.className='text-white text-3xl'
        tempLog.innerHTML = `${kelvinToCelsius(data.main.temp)}°C`;
    
        const image = document.createElement("img");
        image.className = "weatherLogo mx-auto";
        image.width='80'
        image.src=`http://openweathermap.org/img/w/${data.weather[0].icon}.png`
        
        card_weather.append(nameLog,tempLog, image,)
        container_cards.append(card_weather);
        return container_cards;
      });
  };

let kelvinToCelsius = (kelvinValue) => Math.floor(kelvinValue - 273);
kelvinToCelsius(297);

const clean = document.querySelector("button[type='reset']")
clean.addEventListener("click", () => {
  container_cards.innerHTML = "";
});