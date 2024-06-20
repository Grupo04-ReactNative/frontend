import { SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import Button from "../../components/Button/button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { StackParamList } from "../../Routes/HomeStackRoutes";
import { TextInput2 } from "../../components/TextInput/textInput";
import { Mensagem } from "../../components/Mensagem/mensagem";


type NomeScreenNavigationProp = NativeStackNavigationProp<StackParamList, 'Nome'>;


export default function Nome() {
    const navigation = useNavigation<NomeScreenNavigationProp>()
    return (
      <SafeAreaView style={styles.outerContainer}>
      <LinearGradient
         colors={['#2403EC', '#B51AAD', '#EEC122']}
         style={styles.gradientContainer}
       >
       

       <Mensagem
              textoPrincipal="Bem vindo!"
              textoAuxiliar="Insira seu nome."
       />
        <TextInput2/>


        <Button 
                isOutlined={false}
                buttonText={'Continuar'}
                onPress={() => { navigation.navigate('Form')}}
              />
              
     </LinearGradient>
  </SafeAreaView>
    );
  }