import * as constants from "../Constants";
import upcomingMoviesService from '../Services/upcomingMoviesService';

export const getUpcomingMovies = () => {
    return async dispatch => {
        try {
            const upcomingMovies = await upcomingMoviesService.getUpcomingMovies();
            dispatch(getUpcomingMoviesSuccess(upcomingMovies));
        } catch (error) {
            //TODO: error handling
        }
    };
}

const getUpcomingMoviesSuccess = upcomingMovies => ({
    type: constants.GET_UPCOMING,
    payload: upcomingMovies
});