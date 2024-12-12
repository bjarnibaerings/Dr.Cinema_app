import { createSlice } from "@reduxjs/toolkit";
import * as constants from "../Constants";
import upcomingMoviesService from '../Services/upcomingMoviesService';
import {Alert} from "react";

export const fetchUpcomingMovies = () => ({
    type: constants.FETCH_UPCOMING_MOVIES
});

export const fetchUpcomingMoviesSuccess = (movies) => ({
    type: constants.FETCH_UPCOMING_MOVIES_SUCCESS,
    payload: movies
});

export const fetchUpcomingMoviesFailure = (error) => ({
    type: constants.FETCH_UPCOMING_MOVIES_FAILURE,
    payload: error
});


export const getUpcomingMovies = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const token = state.api.token;

        dispatch(fetchUpcomingMovies());

        try {
            const response = await fetch(`https://api.kvikmyndir.is/upcoming?token=${token}`);
            const movies = await response.json();

            dispatch(fetchUpcomingMoviesSuccess(movies));
        } catch (error) {
            dispatch(fetchUpcomingMoviesFailure(error.toString()));
            Alert.alert("Error", "Failed to fetch upcoming movies");
        }
    };
};
