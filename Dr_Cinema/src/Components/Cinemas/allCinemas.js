import {useEffect} from "react";
import {View, ScrollView, Button, Text, FlatList, TouchableOpacity} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getToken, getMovies, getCinemas } from "../API/apiSlicer";
import styles from "./styles";


export function Cinemas({ navigation }){
    const dispatch = useDispatch();
    const token = useSelector((state) => {return state;})
    const cinemas = useSelector((state) => state.api.cinemas);
    const movies = useSelector((state) => state.api.movies)

    useEffect(() =>{
        dispatch(getCinemas());
    }, [dispatch])

    const sortedCinemas = cinemas.slice().sort((a, b) => 
        a.name.localeCompare(b.name));


    return(
            <FlatList
                data={sortedCinemas}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View >
                    <TouchableOpacity style={styles.cinemaContainer} onPress={() => navigation.navigate('{cinema.name}', {cinema: item})}>
                        <Text style={styles.cinemaName}>{item.name}</Text>
                        <Text style={styles.subText}>{item.website}</Text>
                    </TouchableOpacity>
                    </View>
                )}
                contentContainerStyle={{
                    paddingBottom: 20,
                    justifyContent: "center",
                    alignItems: "center", 
                }}
            />
    );
}