import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        width: '100%',
    },
    inputContainer: {
      width: "100%",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    input: {
      width: "90%",
      padding: 16,
      marginVertical: 4,
      borderColor: "#fff",
      borderRadius: 12,
      borderWidth: 2,
      fontSize: 18,
      color: '#fff',
      backgroundColor: 'rgba(222, 196, 222, 0.5)'
    },
});
export const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    picker: {
        height: 50,
        width: '45%',
    },
});
