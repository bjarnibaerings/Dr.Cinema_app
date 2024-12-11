import React from "react"
import {View, Text, TouchableOpacity} from "react-native"
import { useRoute } from "@react-navigation/native";
import styles from "./styles";


const ChosenCinema = ({navigation}) => {
    const route = useRoute();
    const {cinema} = route.params;
    return(
        <View>
            <Text style={styles.title}>{cinema.name}</Text>

            <View style={styles.container}>
            <Text style={styles.containerText}>PhoneNumber: {cinema.phone}</Text>
            <Text style={styles.containerText}>Website: {cinema.website}</Text>
            </View>
            <Text>Adress: {cinema["address\t"]} {cinema.city}</Text>
            <Text style={styles.title}>Description</Text>
            
            <Text>{cinema.description}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("{cinema.name}'s Movies")}>
                <Text> click here for all movies from cinema</Text>
            </TouchableOpacity>
        </View>
    )
};

export default ChosenCinema