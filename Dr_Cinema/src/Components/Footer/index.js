import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home Page")}>
                <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AllCinemas")}>
                <Text style={styles.buttonText}>Cinemas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("UpcomingMovies")}>
                <Text style={styles.buttonText}>Upcoming Movies</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footer:{
        height: 80,
        width: '100%',
        backgroundColor: 'lightgray',
        bottom: 0,
        flexDirection: "row",
        position:"absolute",
        bottom:5
    },
    button:{
        borderColor: "black",
        borderRightWidth:5,
        borderLeftWidth: 5,
        borderTopWidth:2,
        borderBottomWidth:2,
        height:"100%",
        width:139,
        paddingTop:25
    },
    buttonText:{
        fontSize:20,
        alignSelf:"center"
    }
});

export default Footer;