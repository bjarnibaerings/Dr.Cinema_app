import React from "react"
import {View, Text, TouchableOpacity} from "react-native"


const AllCinemas = ({navigation}) => {
    return(
        <View>
            <Text> this is all cinimas </Text>
            <TouchableOpacity onPress={() => navigation.navigate('{cinema.name}')}>
                <Text> click here for a chosen cinema</Text>
            </TouchableOpacity>
        </View>
    )
};

export default AllCinemas;