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

export default UpcomingMovies;