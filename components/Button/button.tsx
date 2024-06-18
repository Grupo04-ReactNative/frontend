import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
    isOutlined: boolean;
    buttonText: string;

}

const Button = ({isOutlined, buttonText, ...rest}: ButtonProps) => {
    return <TouchableOpacity 
                style={isOutlined ? styles.outlinedButton : styles.button} 
                {...rest}
                >
                <Text 
                style={isOutlined ? styles.outlinedButtonText : styles.buttonText}>
                    {buttonText}</Text>
            </TouchableOpacity>
}

export default Button;