import React from 'react';
import { View, StyleSheet } from 'react-native';
import AboutText from '../../components/AboutText/AboutText';

const Sobre: React.FC = () => {
    return (
        <View style={styles.container}>
            <AboutText />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        textAlign: 'center'
    },
});

export default Sobre;