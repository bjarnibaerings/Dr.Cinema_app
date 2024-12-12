import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as StoreProvider } from 'react-redux';
import { useSelector, useEffect} from 'react-redux';
import store from '../Redux/store';

const Stack = createStackNavigator();

//main 3 pages
import HomePage from "../View/Home Page"
import AllCinemas from '../View/AllCinemas';
import UpcomingMovies from '../View/UpcomingMovies';

import ChosenCinema from '../View/ChosenCinema'; //from all cinemas
import CinemasMovies from '../View/CinemasMovies'; //from see chosen cinema
import ChosenMovie from '../View/ChosenMovie'; //from chosen upcoming movies AND cinemas movies
import ChosenUpcomingMovie from '../View/ChosenUpcomingMovie' //from upcoming movies




const Routes = () => (
    <StoreProvider store={store}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home Page">
                <Stack.Screen name="Home Page" component={HomePage} />
                <Stack.Screen name="AllCinemas" component={AllCinemas} />
                <Stack.Screen name="UpcomingMovies" component={UpcomingMovies} />
                <Stack.Screen name="ChosenCinema" component={ChosenCinema} options={({ route }) => ({ title: route.params?.cinema.name })}/>
                <Stack.Screen name="CinemasMovies" component={CinemasMovies} options={({ route }) => ({ title: `${route.params?.cinema.name}'s Movies` })} />
                <Stack.Screen name="ChosenMovie" component={ChosenMovie} options={({ route }) => ({ title: route.params?.movie.name })} />
                <Stack.Screen name="ChosenUpcomingMovie" component={ChosenUpcomingMovie} options={({ route }) => ({ title: route.params?.upcomingMovie.title })} />
            </Stack.Navigator>
        </NavigationContainer>
    </StoreProvider>
);


export default Routes;