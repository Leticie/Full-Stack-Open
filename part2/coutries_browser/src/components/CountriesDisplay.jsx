import { CountryInfo } from "./CountryInfo"
import { useEffect, useState } from "react"
import { MAX_DISPLAYED_COUTNRIES } from "../constants/constants"
import { CountriesList } from "./CountriesList"
import { WeatherCapital } from "./WeatherCapital"
import { getCapitalCoordinates } from "../helpers/helpers"
import axios from "axios"
import { countriesToShowFilter } from "../helpers/helpers"

export const CountriesDisplay = ({searchedCountry, filter}) => {
  const [selectedCountry, setSelectedCountry] = useState([])
  const [buttonClicked, setButtonClicked] = useState(false)
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    setButtonClicked(false)
  },[searchedCountry])

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountriesList(response.data);
    });
  }, []);


  const countriesToShow = countriesToShowFilter(filter, countriesList, searchedCountry);

  const handleClick = (country) => {
    setSelectedCountry(country)
    getCapitalCoordinates(country, handleLatitudeChange, handleLongitudeChange)
    setButtonClicked(true)
  }

  const handleLatitudeChange = (latitude) => {
    setLatitude(latitude)
  }
  const handleLongitudeChange = (longitude) => {
    setLongitude(longitude)
  }

  if (buttonClicked) {
    return (
      <div>
        <CountryInfo country={selectedCountry} />
        <WeatherCapital country={selectedCountry} latitude={latitude} longitude={longitude} />
      </div>
    )
  }  
  if (countriesToShow.length < MAX_DISPLAYED_COUTNRIES) {
    return <CountriesList countriesToShow={countriesToShow} handleClick={handleClick} />
  }  
  return <p>Too many matches, specify another filter</p>   
}