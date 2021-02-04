export const fechtWeather = async (location) => {
    const ENDPOINT_URL =`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_METEO_API_KEY}`;

    const request = await fetch(ENDPOINT_URL);
    return request;
} 