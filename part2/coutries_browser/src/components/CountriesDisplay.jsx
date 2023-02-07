import { CountryInfo } from "./CountryInfo"
import { useState } from "react"
import { MAX_DISPLAYED_COUTNRIES } from "../constants/constants"
import { CountriesList } from "./CountriesList"

export const CountriesDisplay = ({countriesToShow}) => {
  const [selectedCountry, setSelectedCountry] = useState([])
  const [buttonClicked, setButtonClicked] = useState(false)

  const handleClick = (country) => {
    setSelectedCountry(country)
    setButtonClicked(true)
  }

  if (buttonClicked) {
    return (
      <CountryInfo country={selectedCountry}/>
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