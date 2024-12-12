import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator,TabRouter } from '@react-navigation/stack';
import { Provider as StoreProvider } from 'react-redux';
import store from '../Redux/store';

const Stack = createStackNavigator();

import Frame from '../View/Frame'; //remove later on and use as component
//main 3 pages
import HomePage from "../View/Home Page"
import AllCinemas from '../View/AllCinemas';
import UpcomingMovies from '../View/UpcomingMovies';

import ChosenCinema from '../View/ChosenCinema'; //from all cinemas
import CinemasMovies from '../View/CinemasMovies'; //from see chosen cinema
import ChosenMovie from '../View/ChosenMovie'; //from chosen upcoming movies AND cinemas movies




const Routes = () => (
    <StoreProvider store={store}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home Page">
                <Stack.Screen name="Home Page" component={HomePage}/>
                <Stack.Screen name="AllCinemas" component={AllCinemas} />
                <Stack.Screen name="UpcomingMovies" component={UpcomingMovies} />
                <Stack.Screen name="{cinema.name}" component={ChosenCinema} />
                <Stack.Screen name="{cinema.name}'s Movies" component={CinemasMovies} />
                <Stack.Screen name="{movie.name}" component={ChosenMovie} />
            </Stack.Navigator>
        </NavigationContainer>
    </StoreProvider>
);

export default Routes;