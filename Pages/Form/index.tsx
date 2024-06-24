import { SafeAreaView, } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import Button from "../../components/Button/button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { StackParamList } from "../../Routes/HomeStackRoutes";
import { Mensagem } from "../../components/Mensagem/mensagem";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Month from "../../components/Month/month";




type FormScreenNavigationProp = NativeStackNavigationProp<StackParamList, 'Form'>;

const months = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

export default function Form() {
    
    const navigation = useNavigation<FormScreenNavigationProp>();
    const { username, userMonth, updateUserMonth } = useContext(UserContext);

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

        <Month 
              userMonthIndex={months.findIndex((month) => month == userMonth)}
              updateUserMonth={updateUserMonth}
               months={months} />
    
        {userMonth != '' && 
          <Button 
            isOutlined={false}
            buttonText={'Enviar'}
            onPress={() => { navigation.navigate('Result')}}
        />
        }

              
     </LinearGradient>
  </SafeAreaView>
    );
  }