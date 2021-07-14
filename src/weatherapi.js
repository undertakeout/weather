const fetch = require("node-fetch");
export const fetchLocationId = async (city) => {
  const response = await fetch(
    `https://www.metaweather.com/api/location/search/?query=${city}`
  );
  const locations = await response.json();
  console.log(locations[0].woeid);
  return locations[0].woeid;
};

export const fetchWeather = async (woeid) => {
  const response = await fetch(
    `https://www.metaweather.com/api/location/${woeid}/`
  );
  const { title, consolidated_weather } = await response.json();
  const { weather_state_name, the_temp } = consolidated_weather[0];

  return {
    location: title,
    weather: weather_state_name,
    temperature: the_temp
  };
};

export const newWeather = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6ce10cd62f0bfce1a0ca92d176cbe65d`
  );
  const data = await response.json();
  return {
    weather: data.weather[0].main,
    location: data.name,
    temperature: Math.floor((data.main.temp - 272.15) * (9 / 5) + 32)
  };
};
