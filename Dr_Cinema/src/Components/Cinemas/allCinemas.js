import {View, Button, Text, FlatList, TouchableOpacity} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getToken, getMovies, getCinemas } from "../API/apiSlicer";
import styles from "./styles";


export function Cinemas({ navigation }){
    const dispatch = useDispatch();
    const token = useSelector((state) => {return state;})
    const cinemas = useSelector((state) => state.api.cinemas);
    const movies = useSelector((state) => state.api.movies)

    console.log(movies)

    return(
        <View>
            <Button title="Get Token" onPress={() => dispatch(getToken())}/>
            <Button title="Get Movies" onPress={() => dispatch(getMovies())}/>
            <Button title="Get Cinemas" onPress={() => dispatch(getCinemas())}/>
            <FlatList
                data={cinemas}
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
        </View>
    );
}