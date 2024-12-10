import React from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native"


const HomePage = ({ navigation: {navigate}}) => {
    return(
        <View>
            <Text>hello this is the main page :D :D :D :D :D :D :D :D </Text>'
            <TouchableOpacity onPress={() => navigate("AllCinemas")}>
                <Text>press here to go to cinema</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate("UpcomingMovies")}>
                <Text>press here to go to upcoming movies</Text>
            </TouchableOpacity>
        </View>
    )
};

export default HomePage;