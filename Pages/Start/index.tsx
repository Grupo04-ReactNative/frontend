import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import Logo from "../../components/Logo/logo";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import Button from "../../components/Button/button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { StackParamList } from "../../Routes/HomeStackRoutes";


type StartScreenNavigationProp = NativeStackNavigationProp<StackParamList, 'Start'>;


export default function Start() {
    const navigation = useNavigation<StartScreenNavigationProp>()
    return (
      <SafeAreaView style={styles.outerContainer}>
      <LinearGradient
         colors={['#2403EC', '#B51AAD', '#EEC122']}
         style={styles.gradientContainer}
       >
       
        <Logo logoText={'PokeMatch'}/>
        <Button 
                isOutlined={false}
                buttonText={'Começar'}
                onPress={() => { navigation.navigate('Form')}}
              />
              
     </LinearGradient>
  </SafeAreaView>
    );
  }