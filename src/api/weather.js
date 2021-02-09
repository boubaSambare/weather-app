export const fechtCurentWeather = async (location) => {
    const ENDPOINT_URL =`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_METEO_API_KEY}`;

    const request = await fetch(ENDPOINT_URL);
    return request;
} 

export const fechtDaylyWeather = async (long,lat) => {
    const ENDPOINT_URL =`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly&appid=${process.env.REACT_APP_METEO_API_KEY}`;

    const request = await fetch(ENDPOINT_URL);
    return await request.json();
} 