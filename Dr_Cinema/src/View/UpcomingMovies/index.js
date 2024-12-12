import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert, FlatList, Image,  Button, Modal } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { getUpcomingMovies } from "../../Actions/upcomingMoviesActions"
import styles from "./styles"
import Video from "react-native-video"

const UpcomingMoviesScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { data: upcomingMovies } = useSelector(state => state.upcomingMovies);

    const [isModalVisible, setModalVisible] = useState(false);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        dispatch(getUpcomingMovies());
    }, [dispatch]);

    const sortedMovies = upcomingMovies
    ? [...upcomingMovies].sort(
        (a, b) =>
          new Date(a["release-dateIS"]) - new Date(b["release-dateIS"])
      )
    : [];

    const handleWatchTrailer = (item) => {
        const trailer =
            item.trailers &&
            item.trailers[0]?.results &&
            item.trailers[0].results[0]?.url;

        if (trailer) {
            setTrailerUrl(trailer);
            setModalVisible(true);
        } else {
            Alert.alert("Trailer not available", "No trailer is available for this movie.");
        }
  };
    

    return (
        <View>
            <FlatList
                data={sortedMovies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <TouchableOpacity style={styles.movieItem}>
                        <Image style={styles.thumbnail} src={item.poster} />
                        <TouchableOpacity style={styles.movieItem2}>
                            <Text style={styles.movieName}>{item.title}</Text>
                            <Text style={styles.movieYear}>Release Date: {item["release-dateIS"]}</Text>
                            <Button style={styles.button} title="Watch Trailer" onPress= {() => handleWatchTrailer(item)} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                )}
            />
            <Modal
                visible={isModalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
                >
                <View style={styles.modalContainer}>
                <Video
                    source={{ uri: trailerUrl }}
                    style={styles.videoPlayer}
                    controls
                    resizeMode="contain"
                />
                <Button title="Close" onPress={() => setModalVisible(false)} />
                </View>
        </Modal>
        </View>
    )
};


export default UpcomingMoviesScreen;