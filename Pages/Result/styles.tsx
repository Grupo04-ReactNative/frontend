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
        alignItems: "center"
    },
    spriteImage: {
        width: 120,
        height: 120,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
    
});