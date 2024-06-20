import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles2 } from '../settings/style';
import { LinearGradient } from "expo-linear-gradient";
import Spacer from '../Spacer/spacer';

const Informacoes = () => {
    return (
        <View style={styles2.container}>
            <Text style={styles2.title}>Fale conosco através de:</Text>
            <Text style={styles2.text}>
                WhatsApp: (11)4002-8922</Text>
                <Spacer lines={2} />
                <Text style={styles2.text}>
                E-mail: grupo4@serratec.com.br</Text>
                <Spacer lines={2} />
                
        </View>
    );
};

export default Informacoes;