import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, Image, ActivityIndicator, View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { PersonalidadePokemonProps, getPersonalidadePokemon } from "../../services/apiPersonalidadePokemon";
import { Mensagem } from "../../components/Mensagem/mensagem";

export default function Result( ) {
   const [ personalidadePokemon, setPersonalidadePokemon ] = useState<PersonalidadePokemonProps>();
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);

   const renderItem = ({ item }: { item: string }) => (
    <View style={styles.gridItem}>
      <Image source={{ uri: item }} style={styles.spriteImage} />
    </View>
  );

   useEffect(() => {
    getResultadoPersonalidade();
   }, [])

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

  if(isLoading) {
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
        <View style={styles.gridContainer}>
          {validSprites.map((sprite, index) => (
            <View key={index} style={styles.gridItem}>
              <Image source={{ uri: sprite }} style={styles.spriteImage} />
            </View>
          ))}
        </View>
        <Mensagem
          textoPrincipal={"Vc é um " + personalidadePokemon.name}
          textoAuxiliar={personalidadePokemon.frasePersonalidade}
        />
      </LinearGradient>
    </SafeAreaView>
  );
}
