import { TextInput, View } from "react-native"
import { styles } from "./styles"
import { useEffect, useRef } from "react";

export const FormMes = () =>{
    return <View style={styles.container}> 
          <TextInput style={styles.input}
            placeholder="Nome"
    />
  </View>
}

