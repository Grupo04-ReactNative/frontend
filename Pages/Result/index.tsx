import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, ActivityIndicator, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { PersonalidadePokemonProps, getPersonalidadePokemon } from "../../services/apiPersonalidadePokemon";
import { Mensagem } from "../../components/Mensagem/mensagem";
import SocialIcons from "../../components/SocialIcons/SocialIcons";
import Carrossel from "../../components/Carrossel/carrossel";

export default function Result() {
    const [personalidadePokemon, setPersonalidadePokemon] = useState<PersonalidadePokemonProps>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getResultadoPersonalidade();
    }, []);

    const getResultadoPersonalidade = async () => {
        try {
            const response = await getPersonalidadePokemon();
            console.log('Conectamos a API! Essa é a resposta:');
            console.log(response.data);
            setPersonalidadePokemon(response.data);
        } catch (error) {
            console.error('Erro ao conectar a API:', error);
            setError('Failed to fetch data from the API');
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <SafeAreaView style={styles.outerContainer}>
                <LinearGradient colors={['#2403EC', '#B51AAD', '#EEC122']} style={styles.gradientContainer}>
                    <ActivityIndicator size="large" color="#FFFFFF" />
                </LinearGradient>
            </SafeAreaView>
        );
    }

    if (error) {
        return (
            <SafeAreaView style={styles.outerContainer}>
                <LinearGradient colors={['#2403EC', '#B51AAD', '#EEC122']} style={styles.gradientContainer}>
                    <Text>Error: {error}</Text>
                </LinearGradient>
            </SafeAreaView>
        );
    }

    if (!personalidadePokemon) {
        return (
            <SafeAreaView style={styles.outerContainer}>
                <LinearGradient colors={['#2403EC', '#B51AAD', '#EEC122']} style={styles.gradientContainer}>
                    <Text>No data found</Text>
                </LinearGradient>
            </SafeAreaView>
        );
    }

    const validSprites = personalidadePokemon.sprites.filter(sprite => sprite !== null && sprite !== undefined);

    return (
        <SafeAreaView style={styles.outerContainer}>
            <LinearGradient colors={['#2403EC', '#B51AAD', '#EEC122']} style={styles.gradientContainer}>
                <Carrossel images={validSprites} />
                <Mensagem
                    textoPrincipal={"Você é um " + personalidadePokemon.name.toUpperCase()}
                    textoAuxiliar={personalidadePokemon.frasePersonalidade}
                />
                <SocialIcons 
                    name={personalidadePokemon.name} 
                    frase={personalidadePokemon.frasePersonalidade} 
                    imagem={validSprites[0]}
                />
            </LinearGradient>
        </SafeAreaView>
    );
}
