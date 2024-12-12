import { StyleSheet } from "react-native";
import { ROUGE } from "../../Constants/colors"

export default StyleSheet.create({
    container:{
        fontSize: 10,
        padding: 15,
        alignItems: "center",
    },
    title:{
        color: ROUGE,
        fontSize: 60,
        textAlign: "center",
        fontFamily: "Bebas Neue"
    },
    subtitle: {
        color: ROUGE,
        fontSize: 45,
        textAlign: "center",
        fontFamily: "Bebas Neue",
        margin: 10
    },
    containerText:{
        textAlign: "left",
        fontSize: 16,
        fontFamily: "Futura",
        textAlign: "center",
        color: "Black",
        elevation: 5,
        margin: 3,
        marginBottom: 3,
        marginRight: "2%",
        width: 250,                   
        shadowColor: "black",          
        shadowOffset: { width: 0, height: 3 }, 
        shadowOpacity: 0.1,             
        shadowRadius: 4,                  
        transform: [{ scaleX: 1 }, { scaleY: 1 }],
    },
    moviesButton: {
        backgroundColor: ROUGE,
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5, 
        shadowColor: "black",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        transform: [{ scaleX: 1 }, { scaleY: 1 }],
        position: "center",
    },
    ButtonText: {
        fontSize: 20,
        fontFamily: "Futura",
        textAlign: "center",
        color: "white",
        textTransform: "uppercase",
        letterSpacing: 2,
    },
    descriptionText: {
        fontSize: 14,
        marginBottom: 30,
        fontFamily: "Futura",
        padding: 10,            
        borderWidth: 2,    
        borderColor: ROUGE,   
        borderRadius: 8,       
        backgroundColor: "white",
        textAlign: "center",   
        color: "black",     
        shadowColor: "black",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    scrollContainer: {
        paddingBottom: 20,  
        paddingHorizontal: 15
    }
});