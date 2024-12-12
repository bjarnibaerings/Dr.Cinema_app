import React from "react";
import { View } from "react-native";
import DetailedMovie from "../../Components/Movies/detailedlMovie";
import Footer from "../../Components/Footer";


const MovieScreen = ({ route, navigation}) => {
    return (
        <View style = {{flex: 1}}> {/* ugly styling but could not find another way to do it with scrollview :(( */}
            <View style = {{flex: 1}}>
            <DetailedMovie route = {route} navigation = {navigation}/> {/* render compinent and passing right route params */}
            </View>
        </View>
        
    );
};

export default MovieScreen;