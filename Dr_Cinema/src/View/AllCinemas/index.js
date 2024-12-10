import React from "react"
import {View, Text, TouchableOpacity} from "react-native"
import { Cinemas } from "../../Components/Cinemas/allCinemas";
import store from "../../Redux/store"
import { Provider as StoreProvider } from "react-redux";

const AllCinemas = ({navigation}) => {
    return(
        <View>
        <StoreProvider store={store}>
            <Cinemas navigation = {navigation}/>
        </StoreProvider>
        </View>
    )
};

export default AllCinemas;