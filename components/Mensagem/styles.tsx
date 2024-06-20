import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-end",
        alignItems: "center",
        width: '100%',
        height: '30%',
        padding: 16,

    },
    boldText: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#fff"
    },
    normalText: {
        fontSize: 36,
        textAlign: 'center',
        color: "#fff",
        opacity: 0.5
    }
})