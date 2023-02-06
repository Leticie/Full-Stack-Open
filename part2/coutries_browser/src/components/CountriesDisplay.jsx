import { CountryInfo } from "./CountryInfo"

export const CountriesDisplay = ({countriesToShow}) => {
    if (countriesToShow.length === 1) {
      return (
        <CountryInfo country={countriesToShow[0]}/>
      )  
    }
    if (countriesToShow.length < 11) {
      return (
        <div>
          {countriesToShow.map(country => (      
            <div key={country.name.common}>
              <p>{country.name.common}</p>
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