import {View, Button, Text, FlatList, TouchableOpacity} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getToken, getMovies, getCinemas } from "../API/apiSlicer";


export function Cinemas({ navigation }){
    const dispatch = useDispatch();
    const token = useSelector((state) => {console.log("State in StateSelector: ",state.api.cinemas); return state;})
    const cinemas = useSelector((state) => state.api.cinemas);


    return(
        <View>
            <Button title="Get Token" onPress={() => dispatch(getToken())}/>
            <Button title="Get Movies" onPress={() => dispatch(getMovies())}/>
            <Button title="Get Cinemas" onPress={() => dispatch(getCinemas())}/>
            <FlatList
                data={cinemas}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View>
                    <TouchableOpacity onPress={() => navigation.navigate('{cinema.name}', {cinema: item})}>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                        <Text>{item.website}</Text>
                    </View>
                )}
            />
        </View>
    );
}