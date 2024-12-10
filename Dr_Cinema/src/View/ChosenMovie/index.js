import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, Linking, TouchableOpacity } from "react-native";

const ChosenMovie = ({ route }) => {
  const { movie } = route.params;  // Extract the movie data from the route params

  return (
    <ScrollView style={styles.container}>
      {/* poster */}
      <Image source={{ uri: movie.poster }} style={styles.poster} />
      
      {/* title */}
      <Text style={styles.title}>{movie.title} ({movie.year})</Text>
      
      {/* plot */}
      <Text style={styles.plot}>{movie.plot}</Text>

      {/* ratings */}
      <View style={styles.ratings}>
        <Text>IMDb Rating: {movie.ratings.imdb}</Text>
        <Text>Rotten Tomatoes: Audience: {movie.ratings.rotten_audience}, Critics: {movie.ratings.rotten_critics}</Text>
      </View>

      {/* directors */}
      <Text style={styles.subtitle}>Director:</Text>
      <Text>{movie.directors_abridged.map((director) => director.name).join(", ")}</Text>

      {/* actors */}
      <Text style={styles.subtitle}>Actors:</Text>
      <Text>{movie.actors_abridged.map((actor) => actor.name).join(", ")}</Text>

      {/* gnres */}
      <Text style={styles.subtitle}>Genres:</Text>
      <Text>{movie.genres.map((genre) => genre.Name).join(", ")}</Text>

      {/* showtimes */}
      <Text style={styles.subtitle}>Showtimes:</Text>
      {movie.showtimes.map((cinema, index) => (
        <View key={index}>
          <Text>{cinema.cinema_name}</Text>
          {cinema.schedule.map((schedule, i) => (
            <View key={i} style={styles.showtime}>
              <Text>{schedule.time}</Text>
              <TouchableOpacity onPress={() => Linking.openURL(schedule.purchase_url)}>
                <Text style={styles.link}>Purchase Ticket</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ))}

      {/* trailer */}
      <Text style={styles.subtitle}>Trailers:</Text>
      {movie.trailers.map((trailer, index) => (
        <View key={index}>
          <Text>{trailer.name}</Text>
          <TouchableOpacity onPress={() => Linking.openURL(`https://www.youtube.com/watch?v=${trailer.key}`)}>
            <Text style={styles.link}>Watch Trailer</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff"
  },
  poster: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  plot: {
    fontSize: 16,
    marginVertical: 10,
  },
  ratings: {
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  showtime: {
    marginVertical: 5,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  }
});

export default ChosenMovie;
