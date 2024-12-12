import { StyleSheet } from "react-native";
import { ROUGE } from "../../Constants/colors"

export default StyleSheet.create({
    container: { 
        padding: 10,
        flex: 1,
        alignItems: "center",
        padding: 10,
        paddingTop: 150
    },
    title: {
        fontSize: 28,
        fontFamily: "Futura",
        textAlign: "center",
        marginBottom: 5
    },
    title2: {
        fontSize: 65,
        fontFamily: "Bebas Neue",
        textAlign: "center",
        marginBottom: 40
    },
    Button: {
        backgroundColor: ROUGE,
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        transform: [{ scaleX: 1 }, { scaleY: 1 }],
        position: "center"
    },
    ButtonText: {
        fontSize: 36,
        fontFamily: "Futura",
        textAlign: "center",
        color: "white",
        textTransform: "uppercase",
        letterSpacing: 2
    }
  });