import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles2 } from '../settings/style';

const Privacidade = () => {
    return (
        <ScrollView contentContainerStyle={styles2.container}>
            <Text style={styles2.title}>Disciplina:</Text> 
            <Text style={styles2.text}>Desenvolvimento Mobile</Text>
            <Text style={styles2.title}>Professor:</Text>
            <Text style={styles2.text}>Fred</Text>
            <Text style={styles2.title}>Desenvolvedores:</Text> 
            <Text style={styles2.text}>André Luiz</Text>
            <Text style={styles2.text}>Gustavo Becário</Text>
            <Text style={styles2.text}>Julia Coelho</Text>
            <Text style={styles2.text}>Paula Beatriz</Text>
        </ScrollView>
    );
};

export default Privacidade;