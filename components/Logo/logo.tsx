import { Image, Text, View } from "react-native";
import logo from '../../assets/pokematch-logo.png';
import { styles } from "./styles";

interface LogoProps {
    logoText: string;
}

const Logo = ({logoText} : LogoProps) => {
    return <View style={styles.logoContainer}>
                <Image style={styles.logoImage} source={logo}/>
                <Text style={styles.logoText}>{logoText}</Text>
          </View>
}

export default Logo;