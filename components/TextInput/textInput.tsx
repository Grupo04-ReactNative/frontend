import { TextInput, View } from "react-native"
import { styles } from "./styles"

export const TextInput2 = () =>{
  return  <View style={styles.container}> 
    <TextInput style={styles.input}
    placeholder="Nome"
    />
  </View>
}

