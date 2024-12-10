import React from "react"
import {View, Text, TouchableOpacity} from "react-native"
import { Cinemas } from "../../Components/Cinemas/allCinemas";
import store from "../../Redux/store"
import { Provider as StoreProvider } from "react-redux";

const AllCinemas = ({navigation}) => {
    return(
        <View>
        <StoreProvider store={store}>
            <Cinemas/>
        </StoreProvider>
            <TouchableOpacity onPress={() => navigation.navigate('{cinema.name}')}>
                <Text> click here for a chosen cinema</Text>
            </TouchableOpacity>
        </View>
    )
};

export default AllCinemas;