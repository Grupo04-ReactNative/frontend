import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 2,
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
        textAlign: 'center'
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
    },
        
  });

  export { styles };