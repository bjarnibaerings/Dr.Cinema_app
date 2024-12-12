import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      padding: 20 
    },
    heading: { 
      fontSize: 20, 
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
    },
    movieDetails: {
      flex: 1,
    },
    movieName: { 
      fontSize: 16, 
      fontWeight: "bold" 
    },
    discription: { 
      fontSize: 14 
    }
  });