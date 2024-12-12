import React from "react";
import { View } from "react-native";
import Movies from "../../Components/CinemasMovies/moviesList";
import Footer from "../../Components/Footer";

const CinemasMovies = ({ navigation }) => {
    return (
        <View>
            <Movies navigation = {navigation}/> 

        </View>
    );
};

export default CinemasMovies;
