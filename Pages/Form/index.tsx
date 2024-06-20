import { SafeAreaView, } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import Button from "../../components/Button/button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { StackParamList } from "../../Routes/HomeStackRoutes";
import { Mensagem } from "../../components/Mensagem/mensagem";
import { TextInput2 } from "../../components/TextInput/textInput";
import MonthYear from "../../components/MonthYear/monthYear";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";


type FormScreenNavigationProp = NativeStackNavigationProp<StackParamList, 'Form'>;

export default function Form() {
    
    const navigation = useNavigation<FormScreenNavigationProp>();
    const { username } = useContext(UserContext);

    return (
      <SafeAreaView style={styles.outerContainer}>
      <LinearGradient
         colors={['#2403EC', '#B51AAD', '#EEC122']}
         style={styles.gradientContainer}
       >
       <Mensagem
              textoPrincipal={"Olá, " + username + "!"}
              textoAuxiliar="Insira seu mês e ano de nascimento,
              e deixe-nos buscar o Pokémon DA SUA ALMA."
       />
    
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