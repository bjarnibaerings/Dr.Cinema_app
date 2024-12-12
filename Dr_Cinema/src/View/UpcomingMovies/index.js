import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, Modal, Button, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUpcomingMovies } from "../../Actions/upcomingMoviesActions";
import styles from './styles';
import YouTubePlayer from "../../Components/YoutubePlayer";

const UpcomingMoviesScreen = () => {
  const dispatch = useDispatch();
  const { data: upcomingMovies = [], loading, error } = useSelector(
    state => state.upcomingMovies || {}
  );
  const [isModalVisible, setModalVisible] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    dispatch(getUpcomingMovies());
  }, [dispatch]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  const sortedMovies = [...upcomingMovies].sort(
    (a, b) => new Date(a["release-dateIS"]) - new Date(b["release-dateIS"])
  );

  const handleWatchTrailer = (item) => {
    const trailer =
      item.trailers &&
      item.trailers[0]?.results &&
      item.trailers[0].results[0]?.url;
    if (trailer) {
      setTrailerUrl(trailer);
      setModalVisible(true);
    } else {
      Alert.alert('Trailer not available', 'No trailer is available for this movie.');
    }
  };

  return (
    <View>
      {sortedMovies.map((item) => (
        <TouchableOpacity key={item.id} style={styles.movieItem}>
          <Image style={styles.thumbnail} source={{ uri: item.poster }} />
          <View style={styles.movieItem2}>
            <Text style={styles.movieName}>{item.title}</Text>
            <Text style={styles.movieYear}>Release Date: {item["release-dateIS"]}</Text>
            <Button title="Watch Trailer" onPress={() => handleWatchTrailer(item)} />
          </View>
        </TouchableOpacity>
      ))}

      <Modal visible={isModalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <YouTubePlayer trailerUrl={trailerUrl} />
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default UpcomingMoviesScreen;
