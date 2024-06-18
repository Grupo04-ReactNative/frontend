import React, { useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import Logo from "../../components/Logo/logo";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import Button from "../../components/Button/button";


export default function Settings() {
    // remove a barra de navegação do topo
    return (
      <SafeAreaView style={styles.outerContainer}>
      <LinearGradient
         colors={['#2403EC', '#B51AAD', '#EEC122']}
         style={styles.gradientContainer}
       >
       
        <Text>SETTINGS</Text>
        
      
     </LinearGradient>
  </SafeAreaView>
    );
  }