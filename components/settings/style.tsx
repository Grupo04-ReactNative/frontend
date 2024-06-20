import { StyleSheet } from 'react-native';

const styles2 = StyleSheet.create({
    container: {
       // flex: 1,
        flexDirection: 'column',
        width: '80%',
        overflow: 'hidden',
        justifyContent: 'flex-start',
       alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
    },
    gradientContainer2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      selectedItem: {
        backgroundColor: '#d3d3d3',  
      },
      
});

export { styles2 };