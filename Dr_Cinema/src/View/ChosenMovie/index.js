// CinemasMovies.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import DetailedMovie from "../../Components/Movies/detailedlMovie";

const MovieScreen = ({ navigation, route }) => {
    return (
        <View>
            <DetailedMovie route = {route}/> {/* This will render the Movies component */}
        </View>
    );
};

export default MovieScreen;