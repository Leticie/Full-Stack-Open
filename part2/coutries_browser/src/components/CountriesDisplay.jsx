import { CountryInfo } from "./CountryInfo"
import { useEffect, useState } from "react"
import { MAX_DISPLAYED_COUTNRIES } from "../constants/constants"
import { CountriesList } from "./CountriesList"
import { WeatherCapital } from "./WeatherCapital"
import { getCapitalCoordinates } from "../helpers/helpers"
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
      <>
        <CountryInfo country={selectedCountry} />
        <WeatherCapital country={selectedCountry} latitude={latitude} longitude={longitude} />
      </>
    )
  }  
  if (countriesToShow.length < MAX_DISPLAYED_COUTNRIES) {
    return <CountriesList setCountriesList={setCountriesList} countriesToShow={countriesToShow} handleClick={handleClick} />
  }  
  return <p>Too many matches, specify another filter</p>   
}