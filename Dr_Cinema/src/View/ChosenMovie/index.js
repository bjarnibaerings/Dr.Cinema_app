import React from "react";
import { View } from "react-native";
import DetailedMovie from "../../Components/Movies/detailedlMovie";

const MovieScreen = ({ navigation, route }) => {
    console.log(route)
    return (
        <View>
            <DetailedMovie route = {route}/> {/* render compinent and passing right route params */}
        </View>
    );
};

export default MovieScreen;