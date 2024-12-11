// Movies.js
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../API/apiSlicer";
import { useRoute } from "@react-navigation/native";
import styles from "./styles"

const Movies = ({ navigation }) => {
    const route = useRoute();
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.api.movies);
    const { cinema } = route.params;
    const [cinemaMovies, setCinemaMovies] = useState([]);
  
    useEffect(() => {
      if (cinema) {
        dispatch(getMovies());
      }
    }, [cinema, dispatch]);
  
    useEffect(() => {
      if (movies.length > 0 && cinema) { // filtering movies by CINEMA
        const filteredMovies = movies.filter((movie) =>
          movie.showtimes.some((showtime) => showtime.cinema.id === cinema.id)
        ); 
        setCinemaMovies(filteredMovies);
      }
    }, [movies, cinema]);
  
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Movies at {cinema.name}</Text>
        <FlatList
          data={cinemaMovies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("{movie.name}", { movie: item, selectedCinema: cinema })}> {/**passing cinema to remain the showtime to the next screen */}
              <View style={styles.movieItem}>
                <Image source={{ uri: item.poster }} style={styles.thumbnail}/>
                {/*details: */}
                <View style={styles.movieDetails}>
                  <Text style={styles.movieName}>{item.title}</Text>
                  <Text style={styles.movieYear}>Year: {item.year}</Text>
                  <Text style={styles.movieGenres}>
                    Genres: {item.genres.map((g) => g.Name).join(", ")} 
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };
  
export default Movies;