import { TouchableOpacity, Linking } from "react-native";
import { styles } from "./styles";
import { FontAwesome } from '@expo/vector-icons';



const SocialIcons = () => {
    return <TouchableOpacity style={styles.icons}>
    <FontAwesome name="whatsapp" size={48} color="black" onPress={() => Linking.openURL('https://api.whatsapp.com/send?text=Olhe%20meu%20resultado%20-%20http://192.168.1.116:8080/')}/>
  
    <FontAwesome name="facebook" size={48} color="black" onPress={() => Linking.openURL('https://www.facebook.com/sharer/sharer.php?u=https://192.168.1.116:8080/')}/>
   </TouchableOpacity>
}

export default SocialIcons;