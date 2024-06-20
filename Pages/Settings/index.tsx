import React, { useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ConfiguracoesComponent from "../Settings/ConfiguracoesComponent";
import { styles } from "./styles";
import Spacer from '../../components/Spacer/spacer';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



export default function Settings() {
  const data = [
    { id: '1', title: 'Notificações', icon: <Ionicons name="notifications-off" size={24} color="black" /> },
    { id: '2', title: 'Idioma', icon: <Ionicons name="globe" size={24} color="black" />},
    { id: '3', title: 'Privacidade', icon: <MaterialIcons name="privacy-tip" size={24} color="black" /> },
  ];

  return (
    <SafeAreaView style={styles.outerContainer}>
      <LinearGradient
        colors={['#2403EC', '#B51AAD', '#EEC122']}
        style={styles.gradientContainer}
      >
        <Spacer lines={10} />
        <ConfiguracoesComponent data={data} />
      </LinearGradient>
    </SafeAreaView>
  );
}