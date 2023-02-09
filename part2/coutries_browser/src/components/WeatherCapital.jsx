import { useEffect, useState } from "react";
import axios from "axios";
const api_key = process.env.REACT_APP_API_KEY

export const WeatherCapital = ({country, latitude, longitude}) => {
    const [weatherInfo, setWeatherInfo] = useState(null);

    useEffect(() => {
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric`)
          .then((response) => {
            setWeatherInfo(response.data);
          });
      },[latitude, longitude]);

      if(!weatherInfo){
        return null
      }

    return (
      <div>
          <h2>Weather in {country.capital}</h2>
          <p>temperature {weatherInfo.main.temp} Celsius</p>
          <img src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`} alt="weather icon "/>
          <p>wind {weatherInfo.wind.speed} m/s</p>
      </div>
    )  
}