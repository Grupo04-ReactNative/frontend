import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-end",
        alignItems: "center",
        width: '100%',
        height: '40%',
        padding: 16,

    },
    boldText: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#fff"
    },
    scrollContainer: {
        flex: 1,
        marginTop: 8,
    },
    normalText: {
        fontSize: 36,
        textAlign: 'center',
        color: "#fff",
        opacity: 0.5
    }
})