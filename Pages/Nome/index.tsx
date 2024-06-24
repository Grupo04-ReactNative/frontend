import { ActivityIndicator, SafeAreaView, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import Button from "../../components/Button/button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { StackParamList } from "../../Routes/HomeStackRoutes";
import { TextInput2 } from "../../components/TextInput/textInput";
import { Mensagem } from "../../components/Mensagem/mensagem";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { validarInputComSenseDetect } from "../../services/apiSenseDetect";


type NomeScreenNavigationProp = NativeStackNavigationProp<StackParamList, 'Nome'>;

export default function Nome() {

    const { username, updateUsername } = useContext(UserContext);
    const [ input, setInput ] =  useState<string>(username);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const navigation = useNavigation<NomeScreenNavigationProp>()

    const handleValidation = async () => {
      setIsLoading(true)
      try {
        const response = await validarInputComSenseDetect(input);
        if (response.data.status === "allowed") {
          updateUsername(input)
          navigation.navigate('Form');
        } else {
          console.log('respose data ', response.data.status);
          setErrorMessage('Tem certeza que o seu nome é ' + input + ' ?');
        }
      } catch (e) {
        console.error('Falha ao validar com SenseDetect:', e);
        setErrorMessage('Ocorreu um erro!');

      } finally {
        setIsLoading(false);
      }
    }
    
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
          value={input}
          onChangeText={setInput}
        />
        {errorMessage != '' && <Text style={styles.errorText}>{errorMessage}</Text>}
        {input != '' && 
          <Button 
            isOutlined={false}
            buttonText={'Continuar'}
            onPress={handleValidation}
        />
        }
        {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
              
     </LinearGradient>
  </SafeAreaView>
    );
  }