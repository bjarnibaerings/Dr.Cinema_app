import React from "react";
import { View,Text, Image, ScrollView, TouchableOpacity, Linking } from "react-native";
import styles from "./styles";

const DetailedMovie= ({ route }) => {
  const { movie, selectedCinema } = route.params || {};

  const cinemaShowtimes = movie.showtimes.filter(
    (cinema) => cinema.cinema.id === selectedCinema.id
  );

  return (
    <ScrollView style={styles.container}>
      {/* details */}
      <Image source={{ uri: movie.poster }} style={styles.poster} />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.detail}>Year: {movie.year}</Text>
      <Text style={styles.detail}>Duration: {movie.durationMinutes} minutes</Text>

      <Text style={styles.movieGenres}>
        Genres: {movie.genres.map((g) => g.Name).join(", ") || 'Genres not available'}
      </Text>
      <Text style={styles.plot}>{movie.plot}</Text>

      {/* showtimes */}
      <Text style={styles.subtitle}>Showtimes:</Text>
      {cinemaShowtimes.map((cinema, index) => (
        <View key={index}>
          <Text style={styles.detail}>{cinema.cinema.name}</Text>
          {cinema.schedule.map((schedule, i) => (
            <View key={i} style={styles.showtime}>
              <Text style={styles.detail2}>{schedule.time}</Text>
              <TouchableOpacity onPress={() => Linking.openURL(schedule.purchase_url)}>
                <Text style={styles.link}>Purchase Ticket</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};


export default DetailedMovie;
