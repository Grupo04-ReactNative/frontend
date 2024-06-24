import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    button: {
        padding: 10,
        backgroundColor: 'rgba(211, 211, 211, 0.5)',
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300, 
        height: 300, 
    },
    image: {
        width: 200, 
        height: 200, 
        resizeMode: 'contain',
    },
});
