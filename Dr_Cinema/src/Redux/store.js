import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk"
import apiReducer from "../Components/API/apiSlicer"
import upcomingMoviesReducer from "../Reducers/upcomingMoviesReducer";

export default configureStore({
    reducer: {
        api: apiReducer,
        upcomingMovies: upcomingMoviesReducer,
    }
});