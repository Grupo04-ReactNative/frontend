import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { styles } from './style';

interface Profile {
    name: string;
    image: ImageSourcePropType;
    description: string;
}

interface ProfileViewerProps {
    profiles: Profile[];
}

const ProfileViewer = ({ profiles }: ProfileViewerProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
        else {
            setCurrentIndex(prevIndex => profiles.length -1)
        }
    };

    const handleNext = () => {
        if (currentIndex < profiles.length - 1) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
        else {
            setCurrentIndex(0);
        }
    };

    return (
        <View style={styles.gradientContainer2}>
            <View style={styles.navigationContainer}>
                <TouchableOpacity style={styles.button} onPress={handlePrev} >
                    <Text style={styles.buttonText}>{'<'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleNext} >
                    <Text style={styles.buttonText}>{'>'}</Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.container3}>
                {profiles.map((profile, index) => (
                    index === currentIndex && (
                        <View key={index} style={styles.profileContainer}>
                            <Image source={profile.image} style={styles.image} />
                            <Text style={styles.text}>{profile.name}</Text>
                            <Text style={styles.text}>{profile.description}</Text>
                        </View>
                    )
                ))}
            </ScrollView>
        </View>
    );
};

export default ProfileViewer;