import {createSlice} from '@reduxjs/toolkit'

export const MeteoDataSlice = createSlice({
    name:"meteoData",
    initialState:{
        value:null
    },
    reducers: {
        setMeteoData: (state,action) => {
            state.value = action.payload
        }
    }
})

 const {setMeteoData} = MeteoDataSlice.actions

 export const fetchMeteodata = queryString => async (dispatch )=> {
     try {
         const baseUrl = `http://api.openweathermap.org/data/2.5/weather?q=${queryString}&appid=b8b25ea1bd5fcbc2153b04c1e26ba189`
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