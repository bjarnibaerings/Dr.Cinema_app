import React from "react"
import {View, Text, TouchableOpacity} from "react-native"
import { useRoute } from "@react-navigation/native";


const ChosenCinema = ({navigation}) => {
    const route = useRoute();
    const {cinema} = route.params;

    return(
        <View>
            <Text>Cinema Name: {cinema.name}</Text>
            <Text>Cinema Description: {cinema.description}</Text>
            <Text>Cinema Adress: {cinema.address} {cinema.city}</Text>
            <Text>Cinema Phone: {cinema.phone}</Text>
            <Text>Cinema Website: {cinema.website}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("{cinema.name}'s Movies", { cinema })}>
                <Text>Click here for all movies from this cinema</Text>
            </TouchableOpacity>
        </View>
    )
};

export default ChosenCinema