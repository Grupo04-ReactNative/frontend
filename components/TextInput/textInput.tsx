import { TextInput, TextInputProps, View } from "react-native"
import { styles } from "./styles"

interface TextInput2Props extends TextInputProps {

}
export const TextInput2 = (props : TextInput2Props) =>{
  return  <View style={styles.container}> 
      <TextInput 
      {...props}
      autoFocus={true} 
      style={styles.input}
      placeholder="Nome"
      />
  </View>
}

