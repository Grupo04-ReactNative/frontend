import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './styles';
import Spacer from '../Spacer/spacer';

const FaleConosco = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fale conosco através dos canais de comunicação abaixo:</Text>
            <Text style={styles.text}>
                WhatsApp: (11)4002-8922</Text>
                <Spacer lines={2} />
                <Text style={styles.text}>
                E-mail: grupo4@serratec.com.br</Text>
                <Spacer lines={2} />
                
        </View>
    );
};

export default FaleConosco;