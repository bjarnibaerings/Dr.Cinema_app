import React from "react"
import {ScrollView, View, Text, TouchableOpacity} from "react-native"
import { useRoute } from "@react-navigation/native";
import styles from "./styles";
import Footer from "../../Components/Footer";


const ChosenCinema = ({navigation}) => {
    const route = useRoute();
    const { cinema } = route.params;

    return(
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>{cinema.name}</Text>

                <View style={styles.container}>
                    <Text style={styles.containerText}>Phone Number: {cinema.phone}</Text>
                    <Text style={styles.containerText}>Website: {cinema.website}</Text>
                    <Text style={styles.containerText}>Adress: {cinema["address\t"]} {cinema.city}</Text>
                </View>
                <Text style={styles.subtitle}>Description</Text>
                <Text style={styles.descriptionText}>{cinema.description}</Text>
                <TouchableOpacity style={styles.moviesButton} onPress={() => navigation.navigate("CinemasMovies", { cinema })}>
                    <Text style={styles.ButtonText}> See Movies In Show</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        
    )
};

export default ChosenCinema