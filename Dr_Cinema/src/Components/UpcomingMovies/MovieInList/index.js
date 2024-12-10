import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

const Movie = (
    name,
    releseDate,
    genre,
    poster
) => {
    const [movieName] = useState("");
    const [movieReleaseDate] = useState("");
    const [movieGenre] = useState("");
    const [moviePoster] = useState("");

    const dispatch = useDispatch();

    return (
        <View>
            <Image> width=50, height=50, url = {moviePoster} </Image>
            <Text>{movieName}</Text>
            <Text>{movieReleaseDate}</Text>
            <Text>{movieGenre}</Text>
        </View>
    )
}