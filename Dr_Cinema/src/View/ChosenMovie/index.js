import React from "react";
import { View } from "react-native";
import DetailedMovie from "../../Components/Movies/detailedlMovie";
import Footer from "../../Components/Footer";

const MovieScreen = ({ navigation, route }) => {
    console.log(route)
    return (
        <View style = {{flex:1}}>
            <View style = {{flex:1}}>
            <DetailedMovie route = {route}/> {/* render compinent and passing right route params */}
            </View>
            <Footer/>
        </View>
    );
};

export default MovieScreen;