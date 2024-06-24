import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { styles } from './styles';

interface CarrosselProps {
    images: string[];
}

const Carrossel = ({ images }: CarrosselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
        else {
            setCurrentIndex(prevIndex => images.length -1)
        }
    };

    const handleNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
        else {
            setCurrentIndex(0);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handlePrev} >
                <Text style={styles.buttonText}>{'<'}</Text>
            </TouchableOpacity>
            <View style={styles.imageContainer}>
                <Image source={{ uri: images[currentIndex] }} style={styles.image} />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleNext} >
                <Text style={styles.buttonText}>{'>'}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Carrossel;
