import React, { useState, useCallback, useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const YouTubeVideoPlayer = ({ trailerUrl }) => {
  const playerRef = useRef(null);

  // Extract YouTube video ID
  const extractYouTubeId = (url) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const youtubeId = extractYouTubeId(trailerUrl);

  if (!youtubeId) {
    return <View><Text>Invalid YouTube URL</Text></View>;
  }

  return (
    <View style={styles.container}>
      <YoutubePlayer
        ref={playerRef}
        height={Dimensions.get('window').width * (9 / 16)} // 16:9 aspect ratio
        width={Dimensions.get('window').width}
        videoId={youtubeId}
        play={true}
        onError={(error) => console.error('YouTube Player Error:', error)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default YouTubeVideoPlayer;
