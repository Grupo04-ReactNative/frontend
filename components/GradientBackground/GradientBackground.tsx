import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ViewStyle } from 'react-native';

interface GradientBackgroundProps {
    colors: string[];
    style?: ViewStyle;
    children: React.ReactNode;
}

const GradientBackground = ({ colors, style, children }: GradientBackgroundProps) => {
    return (
        <LinearGradient colors={colors} style={style}>
            {children}
        </LinearGradient>
    );
};

export default GradientBackground;