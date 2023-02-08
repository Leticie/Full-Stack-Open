export const CountryInfo = ({country, weatherInfo}) => {

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <p>languages:</p>
      <ul>
        {Object.keys(country.languages).map(key => 
          <li key={key}>{country.languages[key]}</li>
        )}
      </ul>
      <img src={country.flags.png} />
      <h2>Weather in {country.capital}</h2>
      <p>temperature {weatherInfo.main.temp} Celsius</p>
      <img src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}/>
      <p>wind {weatherInfo.wind.speed} m/s</p>
    </div>
  )}