import {createSlice} from '@reduxjs/toolkit'

export const MeteoDataSlice = createSlice({
    name:"meteoData",
    initialState:{
        value:null,
        errorMessage:''
    },
    reducers: {
        setMeteoData: (state, action) => {
            state.value = action.payload;
        },
        setErroorMessage: (state, action) => {
            state.errorMessage = action.payload;
        }
    }
})

 const {setMeteoData} = MeteoDataSlice.actions

 export const fetchMeteodata = queryString => async (dispatch )=> {
     try {
         const baseUrl = `http://api.openweathermap.org/data/2.5/weather?q=${queryString}&appid=${process.env.REACT_APP_METEO_KEY}`
         const request = await fetch(baseUrl)
         if (request.ok) {
             dispatch(setMeteoData(await request.json()))
         }
         console.log(await request.json())

     } catch (error) {
         console.log(error)
     }
 }

export default MeteoDataSlice.reducer