import { StyleSheet } from "react-native";

export const styles = StyleSheet.create( {
    button: {
        width: "90%",
        padding: 16,
        marginVertical: 10,
        backgroundColor: "#f7f1f7",
        borderRadius: 12,
        alignItems: "center",
        elevation: 3, 
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2
    },
    buttonText: {
        color: "#000",
        fontSize: 16,
        fontWeight: "bold",
    },
    outlinedButton: {
        width: "90%",
        padding: 16,
        marginVertical: 10,
        backgroundColor: "transparent",
        borderWidth: 2,
        borderRadius: 12,
        borderColor: "#fff",
        alignItems: "center",

    },
    outlinedButtonText: {
        color: "#fff",
    },

})