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
    },
    reducers: {
        token: (state, action) =>{
            state.token = action.payload;
        }
    }
});

const {token} = apiSlice.actions;

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
            dispatch(token(json.token));
            
        } catch (err){
            dispatch(token(err.toString()));
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
            const response = await fetch(`${baseUrl}/movies?token=${token}`)
            const json = await response.json();
            console.log(json[0].title);
            
        } catch (err){
            dispatch(token(err.toString()));
        }
    }
}


export function getCinemas(){
    return async (dispatch, getState) => {
        try{
            //console.log(baseUrl)
            const state = getState()
            const token = state.api.token
            console.log("GETTING CINEMAS")

            const response = await fetch(`${baseUrl}/theaters`, {
                method: "GET",
                headers: {
                    "x-access-token": token,
                },
            });
            const json = await response.json();
            console.log(json[0].name);
            
        } catch (err){
            dispatch(token(err.toString()));
        }
    }
}

export default apiSlice.reducer;
