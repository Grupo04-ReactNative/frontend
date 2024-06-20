import { TextInput, View } from "react-native"
import { styles } from "./styles"

export const FormMes = () =>{
    return <View style={styles.container}> 
    <TextInput style={styles.input}
    placeholder="Nome"
    />
  </View>
}

