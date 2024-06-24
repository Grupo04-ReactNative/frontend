import React from 'react';
import { View, StyleSheet } from 'react-native';
import AboutText from '../AboutText/aboutText';
import { styles } from './styles';


const Sobre = () => {
    return (
        <View style={styles.container}>
            <AboutText/>
        </View>
    );
};


export default Sobre;