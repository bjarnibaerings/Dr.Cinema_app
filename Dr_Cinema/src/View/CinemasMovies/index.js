import React from "react"
import {View, Text, TouchableOpacity} from "react-native"


const CinemasMovies = ({navigation}) => {
    return(
        <View>
            <Text> this is cinemas movies </Text>
            <TouchableOpacity onPress={() => navigation.navigate("{movie.name}")}>
                <Text> click here to go on a specific movie </Text>
            </TouchableOpacity>
        </View>
    )
};

export default CinemasMovies;