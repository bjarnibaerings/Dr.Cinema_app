import React from "react"
import {View, Text, TouchableOpacity} from "react-native"


const ChosenUpcomingMovie = ({route}) => {
    const { movie } = route.params;

    const trailerUrl =
    movie.trailers && movie.trailers[0]?.results[0]?.url ? movie.trailers[0].results[0].url: null;

  const handleWatchTrailer = () => {
    if (trailerUrl) {
      Linking.openURL(trailerUrl);
    } else {
      alert("Trailer is not available for this movie.");
    }
  };

    return(
        <View>
            <Image source={{poster}} />
            <Text>{movie.title}</Text>
            <Text>
                Genres: { movie.genres.map(genres => genres.name).join(", ") }
            </Text>
            <Text>Release Date: {movie.released}</Text>
            <Text>
                {movie.plot || "Plot not available."}
            </Text>
        <View style={styles.buttonContainer}>
          <Button title="Watch Trailer" onPress={handleWatchTrailer} />
      </View>
      </View>
    );
};

export default ChosenUpcomingMovie;