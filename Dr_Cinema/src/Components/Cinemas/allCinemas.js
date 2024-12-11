import {useEffect} from "react";
import {View, Button, Text, FlatList, TouchableOpacity} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getToken, getMovies, getCinemas } from "../API/apiSlicer";
import styles from "./styles";
import Footer from "../Footer";


export function Cinemas({ navigation }){
    const dispatch = useDispatch();
    const token = useSelector((state) => {return state;})
    const cinemas = useSelector((state) => state.api.cinemas);

    useEffect(() =>{
        dispatch(getCinemas());
    }, [dispatch])

    const sortedCinemas = cinemas.slice().sort((a, b) => 
        a.name.localeCompare(b.name));


    return(
        <View>
            <Button title="Get Movies" onPress={() => dispatch(getMovies())}/>
            <FlatList
                data={sortedCinemas}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.navigate('{cinema.name}', {cinema: item})}>
                        <Text style={styles.cinemaName}>{item.name}</Text>
                    </TouchableOpacity>
                        <Text>{item.website}</Text>
                    </View>
                )}
            />
            <Footer/>
        </View>
    );
}