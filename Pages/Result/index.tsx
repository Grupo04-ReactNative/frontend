import React, { useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import Logo from "../../components/Logo/logo";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import Button from "../../components/Button/button";
import { useNavigation } from "@react-navigation/native";
import { StackProps } from "../../Routes/HomeStackRoutes";

export default function Result( ) {
    // remove a barra de navegação do topo
    const navigation = useNavigation()

    return (
      <SafeAreaView style={styles.outerContainer}>
      <LinearGradient
         colors={['#2403EC', '#B51AAD', '#EEC122']}
         style={styles.gradientContainer}
       >
       
       <Text>ESSE É O RESULTADO</Text>
              
     </LinearGradient>
  </SafeAreaView>
    );
  }