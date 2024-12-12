import React, {useEffect} from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native"
import { getToken } from "../../Components/API/apiSlicer";
import { useDispatch } from "react-redux";
import Footer from "../../Components/Footer";
import styles from "./styles"

const HomePage = ({ navigation: {navigate}}) => {
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getToken());
    }, [dispatch])

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome To</Text>
            <Text style={styles.title2}>Dr. Cinema!</Text>
            <TouchableOpacity style={styles.Button} onPress={() => navigate("AllCinemas")}>
                <Text style={styles.ButtonText}>Cinemas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={() => navigate("UpcomingMovies")}>
                <Text style={styles.ButtonText}>Upcoming Movies</Text>
            </TouchableOpacity>
        </View>
    )
};

export default HomePage;