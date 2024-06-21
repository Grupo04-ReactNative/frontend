import React from 'react';
import { TouchableOpacity, Linking, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { styles } from "./styles";

interface SocialIconsProps {
    name: string;
    frase: string;
}

const SocialIcons = ({ name, frase }: SocialIconsProps) => {
    const message = `Olhe meu resultado: ${name} - ${frase}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=https://192.168.1.116:8080/&quote=${encodeURIComponent(message)}`;

    return (
        <View style={styles.icons}>
            <TouchableOpacity onPress={() => Linking.openURL(whatsappUrl)}>
                <FontAwesome name="whatsapp" size={48} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL(facebookUrl)}>
                <FontAwesome name="facebook" size={48} color="black" />
            </TouchableOpacity>
        </View>
    );
}

export default SocialIcons;