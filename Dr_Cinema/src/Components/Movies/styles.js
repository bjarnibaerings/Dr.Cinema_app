import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: "#fff",
    },
    poster: {
      width: "20%",
      aspectRatio: 2 / 3, //general poster sizes..
      resizeMode: "cover",
      marginBottom: 10,
      borderRadius: 8,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 5,
    },
    detail: {
      fontSize: 16,
      marginBottom: 5,
    },
    plot: {
      fontSize: 16,
      marginVertical: 10,
    },
    subtitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 15,
      marginBottom: 5,
    },
    showtime: {
      marginBottom: 10,
    },
    link: {
      color: "blue",
      textDecorationLine: "underline",
    },
  });