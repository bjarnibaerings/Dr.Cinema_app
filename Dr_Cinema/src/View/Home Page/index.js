import React, {useEffect} from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native"
import { getToken } from "../../Components/API/apiSlicer";
import { useDispatch } from "react-redux";
import Footer from "../../Components/Footer";

const HomePage = ({ navigation: {navigate}}) => {
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getToken());
    }, [dispatch])

    return(
        <View style={{flex:1}}>
            <Text>hello this is the main page :D :D :D :D :D :D :D :D </Text>'
            <TouchableOpacity onPress={() => navigate("AllCinemas")}>
                <Text>press here to go to cinema</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate("UpcomingMovies")}>
                <Text>press here to go to upcoming movies</Text>
            </TouchableOpacity>
            <Footer/>
        </View>
    )
};

export default HomePage;