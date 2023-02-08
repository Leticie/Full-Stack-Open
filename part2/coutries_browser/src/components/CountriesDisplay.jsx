import { CountryInfo } from "./CountryInfo"
import { useState } from "react"
import { MAX_DISPLAYED_COUTNRIES } from "../constants/constants"
import { CountriesList } from "./CountriesList"

export const CountriesDisplay = ({countriesToShow, getCapitalCoordinates, weatherInfo}) => {
  const [selectedCountry, setSelectedCountry] = useState([])
  const [buttonClicked, setButtonClicked] = useState(false)

  const handleClick = (country) => {
    setSelectedCountry(country)
    getCapitalCoordinates(country.capitalInfo.latlng)
    setButtonClicked(true)
  }

  if (buttonClicked) {
    return (
      <CountryInfo country={selectedCountry} weatherInfo={weatherInfo}/>
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