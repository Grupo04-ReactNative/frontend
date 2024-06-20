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
        justifyContent: 'flex-start',
        alignItems: "center",
        
    },
    settings: {
        flex: 1,
        backgroundColor: 'white',
      },
      item: {
        padding: 20,
        backgroundColor: 'rgba(211, 211, 211, 0.5)',
        borderRadius: 25

      },
      itemText: {
        fontSize: 18,
      },
      header: {
        fontSize: 30,
        fontWeight: 'bold',
        padding: 20,
      },
      container: {
        width: '100%',
        alignItems: 'center',

      },
      separator: {
        height: 10,
        backgroundColor: 'transparent',
      },
      icon: { 
           
      },
      item2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
      },
      gradientContainer2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
      },
      selectedItem: {
        backgroundColor: 'rgba(211, 211, 211, 0.5)', 
      },
      
});
