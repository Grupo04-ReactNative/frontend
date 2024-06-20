import { SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import Button from "../../components/Button/button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { StackParamList } from "../../Routes/HomeStackRoutes";
import { TextInput2 } from "../../components/TextInput/textInput";
import { Mensagem } from "../../components/Mensagem/mensagem";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";


type NomeScreenNavigationProp = NativeStackNavigationProp<StackParamList, 'Nome'>;

export default function Nome() {

    const { username, updateUsername } = useContext(UserContext);

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
        <TextInput2

          onChangeText={(e) => {
            updateUsername(e);
            console.log('Username updated to:', e);
          }}
        
        />
        <Button 
                isOutlined={false}
                buttonText={'Continuar'}
                onPress={() => { navigation.navigate('Form')}}
              />
              
     </LinearGradient>
  </SafeAreaView>
    );
  }