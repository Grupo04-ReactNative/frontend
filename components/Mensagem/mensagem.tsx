import { ScrollView, Text, View } from "react-native"
import { styles } from "./styles"

interface MensagemProps {
    textoPrincipal: string,
    textoAuxiliar: string
 }
export const Mensagem = ({textoPrincipal, textoAuxiliar} : MensagemProps) => {
    return <View style={styles.container}>
    <Text style={styles.boldText}>{textoPrincipal}</Text>

        <ScrollView style={styles.scrollContainer}>

            <Text style={styles.normalText}>{textoAuxiliar}</Text>
            
        </ScrollView>

    </View>
}

