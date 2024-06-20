import React, { useState } from 'react';
import { SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ConfiguracoesComponent from "../../components/settings/ConfiguracoesComponent";
import { styles } from "./styles";
import Spacer from '../../components/Spacer/spacer';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Informacoes from '../../components/settings/Informacoes'; 
import Privacidade from '../../components/settings/Privacidade';
import Faleconosco from '../../components/settings/Faleconosco';

export default function Settings() {
  const [selectedOption, setSelectedOption] = useState('Notificações');

  const data = [
    { id: '1', title: 'Fale Conosco', icon: <Ionicons name="notifications-off" size={24} color="black" /> },
    { id: '2', title: 'Sobre o aplicativo', icon: <Ionicons name="information-circle-outline" size={24} color="black" />},
    { id: '3', title: 'Sobre Nós', icon: <MaterialIcons name="privacy-tip" size={24} color="black" /> },
  ];

  const renderContent = () => {
    switch (selectedOption) {
      case 'Fale Conosco':
        return <Faleconosco />;
      case 'Sobre o aplicativo':
        return <Informacoes />;
      case 'Sobre Nós':
        return <Privacidade />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <LinearGradient
        colors={['#2403EC', '#B51AAD', '#EEC122']}
        style={styles.gradientContainer}
      >
        <Spacer lines={5} />
        <ConfiguracoesComponent
          data={data}
          selectedOption={selectedOption}
          onSelectOption={setSelectedOption}
        />
        {renderContent()}
      </LinearGradient>
    </SafeAreaView>
  );
}