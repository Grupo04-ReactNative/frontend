import React, { useEffect } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import Logo from "../../components/Logo/logo";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import Button from "../../components/Button/button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { StackParamList } from "../../Routes/HomeStackRoutes";
import { Mensagem } from "../../components/Mensagem/mensagem";
import { FormMes } from "../../components/FormMes/formMes";
import MonthYear from "../../components/MonthYear/monthYear";




type FormScreenNavigationProp = NativeStackNavigationProp<StackParamList, 'Form'>;

export default function Form() {
    // remove a barra de navegação do topo
    const navigation = useNavigation<FormScreenNavigationProp>();

    return (
      <SafeAreaView style={styles.outerContainer}>
      <LinearGradient
         colors={['#2403EC', '#B51AAD', '#EEC122']}
         style={styles.gradientContainer}
       >
       <Mensagem
              textoPrincipal="Bem vindo!"
              textoAuxiliar="Insira seu mês e ano de nascimento,
              e deixe-nos buscar o Pokémon DA SUA ALMA."
       />
      
    
      
      <FormMes/>

      <MonthYear/>

       <Button 
                isOutlined={false}
                buttonText={'Enviar'}
                onPress={() => { navigation.navigate('Result')}}
              />
              
     </LinearGradient>
  </SafeAreaView>
    );
  }