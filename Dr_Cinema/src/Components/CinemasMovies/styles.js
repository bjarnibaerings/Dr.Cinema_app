import { StyleSheet } from "react-native";
import { ROUGE } from "../../Constants/colors"

export default StyleSheet.create({
    container: { padding: 10 },
    heading: {
      fontSize: 50,
      fontFamily: "Bebas Neue",
      color: ROUGE,
      textAlign: "center",
      fontWeight: "bold", 
      marginBottom: 10
      },
    movieItem: {
      flexDirection: "row",
      marginBottom: 10,
      alignItems: "center",
    },
    thumbnail: {
      width: 80,
      height: 120,
      resizeMode: "cover",
      marginRight: 10,
      marginLeft: 8,
      marginTop: 6
    },
    movieDetails: {
      flex: 1,
    },
    movieContainer:{
      padding: 10,
      marginBottom: 15,
      backgroundColor: ROUGE,
      borderRadius: 10,
      elevation: 5, 
      shadowColor: "black",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      position: "center"
    },
    movieName: { 
      fontSize: 20,
      fontFamily: "Futura",
      color: "white", 
      fontWeight: "bold",
      marginBottom: 10
     },
    movieYear: { 
      fontSize: 14,
      color: "white",
      marginTop: 7
     },
    movieGenres: {
      fontSize: 14,
      color: "white",
      marginTop: 3,
    }
  });