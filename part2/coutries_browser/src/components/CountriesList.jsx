export const CountriesList = ({countriesToShow, handleClick}) => (
    <>
    {countriesToShow.map(country => (      
        <div key={country.name.common}>
        <p>{country.name.common}</p>
        <button onClick={() => handleClick(country)}>show</button>
        </div>  
    ))}
    </>
)
