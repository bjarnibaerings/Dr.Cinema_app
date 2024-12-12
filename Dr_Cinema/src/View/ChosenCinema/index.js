import React from "react"
import {View, Text, TouchableOpacity} from "react-native"
import { useRoute } from "@react-navigation/native";
import styles from "./styles";
import Footer from "../../Components/Footer";


const ChosenCinema = ({navigation}) => {
    const route = useRoute();
    const { cinema } = route.params;

    return(
        <View style={{flex:1}}>
            <Text style={styles.title}>{cinema.name}</Text>

            <View style={styles.container}>
            <Text style={styles.containerText}>PhoneNumber: {cinema.phone}</Text>
            <Text style={styles.containerText}>Website: {cinema.website}</Text>
            </View>
            <Text>Adress: {cinema["address\t"]} {cinema.city}</Text>
            <Text style={styles.title}>Description</Text>
            
            <Text>{cinema.description}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("CinemasMovies", { cinema })}>
                <Text> click here for all movies from cinema</Text>
            </TouchableOpacity>
            <View style={{flex:2}}>
                <Footer/>
            </View>
        </View>

        
    )
};

export default ChosenCinema