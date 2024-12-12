import { View, Text, Image } from "react-native";

const UpcomingMovie = ({
    title,
    released,
    genres,
    poster
}) => {
    return (
        <View>
            <Image source={{uri: poster}} />
            <View>
                <Text>{title}</Text>
                <Text>Release Date: {released}</Text>
                <Text>Genre: {genres}</Text>
            </View>
        </View>
    )
}

export default UpcomingMovie;