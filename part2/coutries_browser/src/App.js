import { useEffect, useState } from "react";
import axios from "axios";
import { CountriesDisplay } from "./components/CountriesDisplay";
const api_key = process.env.REACT_APP_API_KEY

function App() {
  const [countriesList, setCountriesList] = useState([]);
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [searchedCountry, setSearchedCountry] = useState([]);
  const [showFilter, setCountriesToShow] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountriesList(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric`)
      .then((response) => {
        setWeatherInfo(response.data);
      });
  }, [latitude, longitude]);


  const countriesToShow = showFilter
    ? countriesList.filter((country) =>
        country.name.common
          .toLowerCase()
          .includes(searchedCountry.toLowerCase())
      )
    : countriesList;

  const handleChangeFilter = (event) => {
    setSearchedCountry(event.target.value);
    setCountriesToShow(true);
  };

  const getCapitalCoordinates = (latlng) => {
    setLatitude(latlng[0]);
    setLongitude(latlng[1]);
  };


  return (
    <div>
      <form>
        find countries <input onChange={handleChangeFilter} />
      </form>
      <CountriesDisplay
        countriesToShow={countriesToShow}
        getCapitalCoordinates={getCapitalCoordinates}
        weatherInfo={weatherInfo}
      />
    </div>
  );
}

export default App;
