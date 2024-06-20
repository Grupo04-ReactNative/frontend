import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles2 } from '../settings/style';
import { LinearGradient } from "expo-linear-gradient";

const Informacoes = () => {
    return (
        <View style={styles2.container}>
            <Text style={styles2.title}>Sobre:</Text>
            <Text style={styles2.text}>
                Este projeto foi desenvolvido pelos alunos do grupo 4, turma 15 da residência em TIC/Software oferecida pelo SERRATEC-Parque Tecnológico da Região Serrana.</Text>
                <Text style={styles2.title}>Objetivo do Projeto:</Text>
                <Text style={styles2.text}>
                Desenvolvimento Mobile com o objetivo de divertir usuários, trazendo de forma leve e descontraída frases sobre sua personalidade, associadas a um personagem do desenho Pokémon.</Text>
                <Text style={styles2.title}></Text>
                <Text style={styles2.text}>Junho/2024</Text>
        </View>
    );
};

export default Informacoes;