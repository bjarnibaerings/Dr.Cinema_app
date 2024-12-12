import { StyleSheet } from "react-native";
import {ROUGE} from "../../Constants/colors"

export default StyleSheet.create({
    cinemaName:{
        color: "white",
        fontSize: 50,
        textAlign: "center",
        fontFamily: "Bebas Neue"
    },
    subText: {
        fontSize: 14,
        color: "white",
        textAlign: "center",
        fontFamily: "Futura"
    },
    cinemaContainer: {
        backgroundColor: ROUGE,
        width: 350,
        height: 150,
        padding: 10,
        marginBottom: 10,
        marginRight: "2%",           
        borderRadius: 10,            
        justifyContent: "center",    
        alignItems: "center", 
        elevation: 5,                   
        shadowColor: '#000',          
        shadowOffset: { width: 0, height: 3 }, 
        shadowOpacity: 0.1,             
        shadowRadius: 4,                  
        transform: [{ scaleX: 1 }, { scaleY: 1 }],
    }
})