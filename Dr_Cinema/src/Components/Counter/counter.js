import {View, Button, Text} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getToken, getMovies } from "../API/apiSlicer";


export function Counter(){
    const dispatch = useDispatch();
    const token = useSelector((state) => {console.log(state), state.api.token})
    

    return(
        <View>
            <Button title="Get Token" onPress={() => dispatch(getToken())}/>
            <Button title="Get Movies" onPress={() => dispatch(getMovies())}/>
        </View>
    );
}