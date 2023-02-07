import { CountryInfo } from "./CountryInfo"
import { useState } from "react"


export const CountriesDisplay = ({countriesToShow}) => {
  const [selectedCountry, setSelectedCountry] = useState([])
  const [buttonClicked, setButtonClicked] = useState(false)

  const handleChange = (country) => {
    setSelectedCountry(country)
    setButtonClicked(true)
  }


  if (buttonClicked === true) {
    console.log(selectedCountry)
    return (
      <CountryInfo country={selectedCountry}/>
    )
  }  
  if (countriesToShow.length < 11) {
    return (
      <div>
        {countriesToShow.map(country => (      
          <div key={country.name.common}>
            <p>{country.name.common}</p>
            <button onClick={() => handleChange(country)}>show</button>
          </div>  
        ))}
      </div>
    )  
  } else {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    )  
  }     
}