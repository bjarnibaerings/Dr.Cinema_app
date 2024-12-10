// CinemasMovies.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Movies from "../../Components/CinemasMovies/Movies"; // Correct import for default export

const CinemasMovies = ({ navigation }) => {
    return (
        <View>
            <Movies navigation = {navigation}/> {/* This will render the Movies component */}
        </View>
    );
};

export default CinemasMovies;
