import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './style';


const AboutText: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sobre:</Text>
            <Text style={styles.text}>
                Este projeto foi desenvolvido pelos alunos do grupo 4, turma 15 da residência em TIC/Software oferecida pelo SERRATEC-Parque Tecnológico da Região Serrana.
            </Text>
            <Text style={styles.title}>Objetivo do Projeto:</Text>
            <Text style={styles.text}>
                Desenvolvimento Mobile com o objetivo de divertir usuários, trazendo de forma leve e descontraída frases sobre sua personalidade, associadas a um personagem do desenho Pokémon.
            </Text>
            <Text style={styles.text}>Junho/2024</Text>
        </View>
    );
};

export default AboutText;