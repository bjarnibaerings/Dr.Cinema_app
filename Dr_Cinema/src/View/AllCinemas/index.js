    import React from "react"
    import {View, Text, TouchableOpacity} from "react-native"
    import { Cinemas } from "../../Components/Cinemas/allCinemas";
    import store from "../../Redux/store"
    import { Provider as StoreProvider } from "react-redux";
    import Footer from "../../Components/Footer";

const AllCinemas = ({navigation}) => {
    return(
        <View>
            <Cinemas navigation = {navigation}/>
        </View>
        
    )
};

    export default AllCinemas;