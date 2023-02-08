export const getCapitalCoordinates = (country, handleLatitudeChange, handleLongitudeChange) => {
    handleLatitudeChange(country.capitalInfo.latlng[0]);
    handleLongitudeChange(country.capitalInfo.latlng[1]);
};