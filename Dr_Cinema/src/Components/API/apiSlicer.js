import { createSlice } from "@reduxjs/toolkit";

const baseUrl = "https://api.kvikmyndir.is"
const authenticateBaseUrl= "HTTPS://api.kvikmyndir.is/authenticate"
const authenticatePassword= "Bjarni1Bjarni"
const authenticateUsername= "Bjarnib"
const credentials = btoa(`${authenticateUsername}:${authenticatePassword}`)

const apiSlice = createSlice({
    name:"API",
    initialState: {
        token: "",
        cinemas:[],
        movies:[]
    },
    reducers: {
        setToken: (state, action) =>{
            state.token = action.payload;
        },
        setCinemas: (state, action) =>{
            state.cinemas = action.payload;
        },
        setMovies: (state, action) =>{
            state.movies = action.payload;
        }
    }
});

const {setToken, setCinemas, setMovies} = apiSlice.actions;

export function getToken(){
    return async (dispatch) => {
        try{
            const response = await fetch(authenticateBaseUrl, {
                method: "POST",
                headers: {
                    Authorization: `Basic ${credentials}`
                },
            })

            const json = await response.json();
            dispatch(setToken(json.token));
            
        } catch (err){
            dispatch(setToken(err.toString()));
        }
    }
}

export function getMovies(){
    return async (dispatch, getState) => {
        try{
            //console.log(baseUrl)
            const state = getState()
            const token = state.api.token
            console.log("GETTING ALL MOVIES")
            console.log(state.api.token)
            const response = await fetch(`${baseUrl}/movies?token=${token}`)
            const json = await response.json();
            console.log(json);
            dispatch(setMovies(json));
            
        } catch (err){
            dispatch(setMovies(err.toString()));
            console.log(err)
        }
    }
}


export function getCinemas(){
    return async (dispatch, getState) => {
        try{
            //console.log(baseUrl)
            const state = getState()
            const token = state.api.token
            console.log("THIS IS TOKEN FOR CINEMA")
            console.log(state.api.token)

            const response = await fetch(`${baseUrl}/theaters`, {
                method: "GET",
                headers: {
                    "x-access-token": token,
                },
            });
            const json = await response.json();
            console.log(json[0].name);
            dispatch(setCinemas(json));

        } catch (err){
            dispatch(setCinemas(err.toString()));
        }
    }
}

export default apiSlice.reducer;
