import {View, Button, Text} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { incrementCounter } from "../../Features/counter/counter-slice";


export function Counter(){
    const dispatch = useDispatch();
    const counter = useSelector((state) => {
        console.log(state)
        return state.counter.value
    });

    return(
        <View>
            <Text>{counter}</Text>
            <Button title="Get Token" onPress={() => dispatch(incrementCounter())}/>
            <Button title="Get Movies" onPress={() => dispatch(incrementCounter())}/>
        </View>
    );
}