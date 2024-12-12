import { StyleSheet } from "react-native";
import { ROUGE } from "../../Constants/colors"

export default StyleSheet.create({
    container: {
      padding: 10,
      margin: 25
    },
    poster: {
      width: "100%",
      aspectRatio: 2 / 3, //general poster sizes..
      resizeMode: "cover",
      marginBottom: 10,
      borderRadius: 8,
    },
    title: {
      fontSize: 56,
      fontWeight: "bold",
      marginBottom: 5,
      fontFamily: "Bebas Neue",
      textAlign: "center",
      color: ROUGE
    },
    detail: {
      fontSize: 20,
      fontFamily: "Futura",
      marginBottom: 10
    },
    detail2: {
      fontSize: 16,
      fontFamily: "Futura",
      alignItems: "center"
    },
    plot: {
      fontSize: 16,
      marginVertical: 10,
    },
    subtitle: {
      fontSize: 40,
      fontWeight: "bold",
      marginTop: 15,
      marginBottom: 5,
      color: ROUGE,
      fontFamily: "Bebas Neue",
      textAlign: "center",
    },
    showtime: {
      marginBottom: 10,
      flexDirection: "row",
      justifyContent: "space-between"
    },
    link: {
      fontSize:14,
      fontFamily: "Futura",
      backgroundColor: ROUGE,
      color: "white",
      borderRadius: 10,
      textAlign: "center",
      alignSelf: "center",
      padding: 10,
    },
    movieGenres: {
      fontSize: 16,
      fontFamily: "Futura",
      color: ROUGE,
      borderWidth: 2,    
      borderColor: ROUGE,
      borderRadius: 8,
      padding: 6
    }
  });