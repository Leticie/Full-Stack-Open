export const getCapitalCoordinates = (country, handleLatitudeChange, handleLongitudeChange) => {
    handleLatitudeChange(country.capitalInfo.latlng[0]);
    handleLongitudeChange(country.capitalInfo.latlng[1]);
};

export const countriesToShowFilter = (filter, countriesList, searchedCountry) => 
    filter
        ? countriesList.filter((country) =>
            country.name.common
                .toLowerCase()
                .includes(searchedCountry.toLowerCase())
            )
        : countriesList;
