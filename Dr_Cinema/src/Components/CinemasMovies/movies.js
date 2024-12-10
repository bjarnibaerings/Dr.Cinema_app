// Movies.js
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../API/apiSlicer";
import { useRoute } from "@react-navigation/native";

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
        if (movies.length > 0 && cinema) {
            // Filter movies by the selected cinema
            const filteredMovies = movies.filter((movie) =>
                movie.showtimes.some(
                    (showtime) => showtime.cinema.id === cinema.id
                )
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
                    <TouchableOpacity
                        onPress={() => navigation.navigate("{movie.name}", { movie: item })}
                    >
                        <View style={styles.movieItem}>
                            <Text style={styles.movieName}>{item.title}</Text>
                            <Text>{item.duration} mins</Text>
                            {/* Display showtimes for the cinema */}
                            {item.showtimes
                                .filter(
                                    (showtime) =>
                                        showtime.cinema.id === cinema.id
                                )
                                .map((showtime, index) => (
                                    <Text key={index}>
                                        {showtime.schedule.map((schedule, idx) => (
                                            <Text key={idx}>{schedule.time} </Text>
                                        ))}
                                    </Text>
                                ))}
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 10 },
    heading: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
    movieItem: { marginBottom: 10 },
    movieName: { fontSize: 16, fontWeight: "bold" },
});

export default Movies;
