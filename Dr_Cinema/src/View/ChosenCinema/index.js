import React from "react"
import {View, Text, TouchableOpacity} from "react-native"


const ChosenCinema = ({navigation}) => {
    return(
        <View>
            <Text> this is chosen cinema  </Text>
            <TouchableOpacity onPress={() => navigation.navigate("{cinema.name}'s Movies")}>
                <Text> click here for all movies from cinema</Text>
            </TouchableOpacity>
        </View>
    )
};

export default ChosenCinema