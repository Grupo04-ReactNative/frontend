import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
    },
   
    gradientContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        overflow: 'hidden',
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingTop: 150
    },

    errorText: {
        color: 'red',
        marginVertical: 10,
    },
});