import React, { useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import Logo from "../../components/Logo/logo";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import Button from "../../components/Button/button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { StackParamList } from "../../Routes/HomeStackRoutes";

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
       
       <Text>ESSE É O FORM</Text>

       <Button 
                isOutlined={false}
                buttonText={'Enviar'}
                onPress={() => { navigation.navigate('Result')}}
              />
              
     </LinearGradient>
  </SafeAreaView>
    );
  }