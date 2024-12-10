import React from "react"
import {View, Text, TouchableOpacity} from "react-native"
import { useRoute } from "@react-navigation/native";


const ChosenCinema = ({navigation}) => {
    const route = useRoute();
    const {cinema} = route.params;
    return(
        <View>
            <Text>Cinema Name: {cinema.name}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("{cinema.name}'s Movies")}>
                <Text> click here for all movies from cinema</Text>
            </TouchableOpacity>
        </View>
    )
};

export default ChosenCinema