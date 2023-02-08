import { CountryInfo } from "./CountryInfo"
import { useState } from "react"
import { MAX_DISPLAYED_COUTNRIES } from "../constants/constants"
import { CountriesList } from "./CountriesList"
import { WeatherCapital } from "./WeatherCapital"
import { getCapitalCoordinates } from "../helpers/helpers"

export const CountriesDisplay = ({countriesToShow}) => {
  const [selectedCountry, setSelectedCountry] = useState([])
  const [buttonClicked, setButtonClicked] = useState(false)
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

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
    return (
      <CountriesList countriesToShow={countriesToShow} handleClick={handleClick} />
    )  
  } else {
    return (
      <p>Too many matches, specify another filter</p>
    )  
  }     
}