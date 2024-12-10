import React from "react"
import {View, Text, TouchableOpacity} from "react-native"


const UpcomingMovies = ({navigation}) => {
    return(
        <View>
            <Text> this is UpcomingMovies </Text>
            <TouchableOpacity onPress={() => navigation.navigate("{upcomingMovie.name}")}>
                <Text>press here to go to chosen upcoming movive</Text>
            </TouchableOpacity>
        </View>
    )
};

export default UpcomingMovies;import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { getUpcomingMovies } from "../../Actions/upcomingMoviesActions"

const UpcomingMoviesScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUpcomingMovies());
    }, []);

    return (
        <View>
            <Text>Here we will have all upcoming movies</Text>
        </View>
    )
};

export default UpcomingMoviesScreen;