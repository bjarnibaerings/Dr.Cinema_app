import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: { padding: 10 },
    heading: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
    movieItem: {
      flexDirection: "row",
      marginBottom: 10,
      alignItems: "center",
    },
    movieItem2: {
      flexDirection: "column",
      marginBottom: 10,
      alignItems: "left",
    },
    thumbnail: {
      width: 80,
      height: 120,
      resizeMode: "cover",
      marginRight: 10,
    },
    movieDetails: {
      flex: 1,
    },
    movieName: { fontSize: 16, fontWeight: "bold" },
    movieYear: { fontSize: 14 },
    movieGenres: { fontSize: 14 },

    button: {
        fontSize:16,
        backgroundColor: "red",
        color: "green",
        borderRadius: 100,
        margin: 10
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        justifyContent: "center",
        alignItems: "center",
    },
    videoPlayer: {
        width: "90%",
        height: "50%",
    },
  });