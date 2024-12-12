import React, {useEffect} from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native"
import { getToken } from "../../Components/API/apiSlicer";
import { useDispatch } from "react-redux";
import Footer from "../../Components/Footer";

const HomePage = ({ navigation: {navigate}}) => {
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getToken());
    }, [dispatch])

    return(
        <View style={{flex:1}}>
            <Text>Welcome to Dr.Cinema!</Text>
            <Text>Here you can find all kinds of imformation about the next movie you are interested in watching!</Text>
            <Text>We have gathered all the cinemas and their location  for you to find out which is the most convinient of them all!</Text>
            <Text>Each cinema also shows what movies they are currently watching and if you are really insterested in planning to watch then you can even purchase a ticket directly through a link!</Text>
            <Text>Now, if you are not excited about the selcection for the day you can definately check out and plan your next movie night through our upcoming movies tab!</Text>
            <Text>Here you can find all information aobut what movies will show up for the upcoming time. </Text>
            <Text>So, this would be a perfect time to plana a family movie time or with a special someone ;) </Text>
            <Footer/>
        </View>
    )
};

export default HomePage;