import React from 'react';
import { TouchableOpacity, Linking, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { styles } from "./styles";

interface SocialIconsProps {
    name: string;
    frase: string;
    imagem: string,
}

const SocialIcons = ({ name, frase, imagem }: SocialIconsProps) => {
    const message = `${imagem} \n\n Olhe meu resultado: \n\n ${name} - ${frase}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    return (
        <View style={styles.icons}>
            <TouchableOpacity onPress={() => Linking.openURL(whatsappUrl)}>
                <FontAwesome name="whatsapp" size={94} color="black" />
            </TouchableOpacity>
        </View>
    );
}

export default SocialIcons;