import React from "react";
import { View } from "react-native";
import Movies from "../../Components/CinemasMovies/moviesList";

const CinemasMovies = ({ navigation }) => {
    return (
        <View>
            <Movies navigation = {navigation}/> 
        </View>
    );
};

export default CinemasMovies;
