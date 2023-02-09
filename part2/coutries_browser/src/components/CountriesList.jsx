import axios from "axios";
import { useEffect } from "react";

export const CountriesList = ({handleClick, setCountriesList, countriesToShow}) => {
    
    useEffect(() => {
      axios
        .get("https://restcountries.com/v3.1/all")
        .then((response) => {
            setCountriesList(response.data);
        });
    }, []);
    

    return (
        <>
            {countriesToShow.map(country => (      
                <div key={country.name.common}>
                <p>{country.name.common}</p>
                <button onClick={() => handleClick(country)}>show</button>
                </div>  
            ))}
        </>
    )    
}
