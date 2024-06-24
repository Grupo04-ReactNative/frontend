import { StyleSheet } from 'react-native';

const styles2 = StyleSheet.create({
    text: {
        fontSize: 16,
        marginBottom: 5,
    },
    gradientContainer2: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
      },
      profileContainer: {
        alignItems: 'center',
      },
      image: {
          width: 100,
          height: 100,
          marginBottom: 3,
      },
      navigationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    button: {
          flexDirection: 'row',
          backgroundColor: 'rgba(211, 211, 211, 0.5)',
          paddingVertical: 10,
          paddingHorizontal: 10,
          borderRadius: 5,
          marginRight:120,
          marginLeft:120,     
      },
      buttonText: {
          color: '#ffffff',
          fontWeight: 'bold',
          fontSize: 20,
      },
      container3: {
        flexDirection: 'column',
        width: '100%',
        overflow: 'hidden',
        justifyContent: 'flex-start',
        alignItems: "center",  
    },
        
  });

  export { styles2 };