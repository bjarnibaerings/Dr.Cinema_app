import React, { useState, useCallback, useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import styles from './styles';

const YouTubePlayer = ({ trailerUrl }) => {
  const playerRef = useRef(null);

  const extractYouTubeId = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };
  
  const youtubeId = extractYouTubeId(trailerUrl);

  return (
    <View style={styles.container}>
      <YoutubePlayer
        ref={playerRef}
        height={Dimensions.get('window').width * (9 / 16)}
        width={Dimensions.get('window').width}
        videoId={youtubeId}
        play={true}
        onError={(error) => console.error('YouTube Player Error:', error)}
      />
    </View>
  );
};

export default YouTubePlayer;
