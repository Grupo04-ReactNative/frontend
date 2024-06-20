import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginTop: 20,
        paddingHorizontal: 20,
    },
    monthContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 20,
    },
    monthButton: {
        width: '30%',
        padding: 10,
        margin: 5,
        backgroundColor: 'rgba(211, 211, 211, 0.5)',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedMonthButton: {
        backgroundColor: 'rgba(100, 149, 237, 0.5)',
    },
    monthButtonText: {
        color: '#000',
        textAlign: 'center',
    },
    yearButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(211, 211, 211, 0.5)',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    arrowButton: {
        paddingHorizontal: 10,
    },
    arrowText: {
        fontSize: 20,
        color: '#000',
    
    },
    yearDisplayButton: {
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    yearDisplayText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
});
