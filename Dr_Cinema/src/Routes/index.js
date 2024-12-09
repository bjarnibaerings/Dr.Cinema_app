import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Frame from '../View/Frame'; //remove later on and use as component
import AllCinemas from '../View/AllCinemas';
import ChosenCinema from '../View/ChosenCinema';
import ChosenMovie from '../View/ChosenMovie';
import UpcomingMovies from '../View/UpcomingMovies';
import CinemasMovies from '../View/CinemasMovies';
import ChosenUpcomingMovie from '../View/ChosenUpcomingMovie'

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Frame">
            <Stack.Screen name="Frame" component={Frame} />
            <Stack.Screen name="Cinemas" component={AllCinemas} />
            <Stack.Screen name="{cinema.name}" component={ChosenCinema} />
            <Stack.Screen name="{cinema.name}'s Movies" component={CinemasMovies} />
            <Stack.Screen name="{movie.name}" component={ChosenMovie} />
            <Stack.Screen name="Upcoming Movies" component={UpcomingMovies} />
            <Stack.Screen name="{movie.name}" component={ChosenUpcomingMovie} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;