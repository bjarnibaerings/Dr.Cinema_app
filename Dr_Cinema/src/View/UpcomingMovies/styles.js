import { StyleSheet } from "react-native";
import { ROUGE } from "../../Constants/colors"

export default StyleSheet.create({
    container: {
      fontSize: 10,
    
    },
    heading: {
       fontSize: 20, 
       fontWeight: "bold", 
       marginBottom: 10
       },
    movieItem: {
      flexDirection: "row",
      marginBottom: 8,
      backgroundColor: ROUGE,
      margin: 10,
      padding: 10,
      borderRadius: 10,
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
    movieContainer:{
      padding: 12,
      marginBottom: 10,
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
      fontWeight: "bold",
      color: "white", 
      flex: 1,
      flexWrap: "wrap",
      maxWidth: 200
     },
    movieDate: { 
      fontSize: 14,
      color: "white",
      marginTop: 10
     },
    button: {
      fontSize:16,
      fontFamily: "Futura",
      backgroundColor: "white",
      color: "black",
      borderRadius: 100,
      margin: 10,
      textAlign: "center",
      alignSelf: "center",
      padding: 10,    
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
    title: {
      fontSize: 50,
      fontFamily: "Bebas Neue",
      color: ROUGE,
      textAlign: "center",
      fontWeight: "bold", 
      marginBottom: 10
    },
    buttonContainer: {
      padding: 10,
      alignItems: "center"
    },
    closeButtonContainer: {
      padding: 10,
      marginBottom: 15,
      backgroundColor: "white",
      borderRadius: 10,
      elevation: 5, 
      shadowColor: "black",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      transform: [{ scaleX: 1 }, { scaleY: 1 }],
      position: "center",
      bottom: 50
    },
    closeButton: {
      fontSize: 30,
      fontFamily: "Futura",
      color: ROUGE
    }
  });