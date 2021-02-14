import {createSlice} from '@reduxjs/toolkit'

export const MeteoDataSlice = createSlice({
    name:"meteoData",
    initialState:{
        value:null,
        isLoading:false
    },
    reducers: {
        setMeteoData: (state, action) => {
            state.value = action.payload;
        },
        setIsLoading: (state) => {
            state.errorMessage = true;
        },
        unsetIsloading: (state) => {
            state.isLoading = false
        }
    }
})

 const {setMeteoData,setIsLoading,unsetIsloading} = MeteoDataSlice.actions

 export const fetchMeteodata = queryString => async (dispatch )=> {
     try {
         const baseUrl = `${process.env.REACT_APP_BASE_URL}/weather?name=${queryString}`
         dispatch(setIsLoading());
         const request = await fetch(baseUrl)
         if (request.ok) {
             dispatch(setMeteoData(await request.json()));
             dispatch(unsetIsloading());
         }
        // console.log(await request.json())

     } catch (error) {
         console.log(error)
     }
 }

export default MeteoDataSlice.reducer