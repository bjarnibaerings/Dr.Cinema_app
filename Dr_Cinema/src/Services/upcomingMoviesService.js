const ENDPOINT = "`https://api.kvikmyndir.is/upcoming?token=${token}`";

const upcomingMoviesService = {
    getUpcomingMovies: async () => {
        const result = await fetch(ENDPOINT);
        const json = await result.json();
        //todo: find out what i return
    }
};

export default upcomingMoviesService;