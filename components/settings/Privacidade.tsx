import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles2 } from '../settings/style';
import { Image } from 'react-native';

const Privacidade = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const profiles = [
        {
            name: 'André Luiz',
            image: require('../../assets/charmander.png'),
            description: 'O André é como o Charmander! Sempre cheio de energia e com uma chama que indica sua força de vontade. Assim como o Charmander, ele fica feliz e animado facilmente, mas cuidado, pois quando fica furioso pode queimar tudo ao seu redor.'
        },
        {
            name: 'Gustavo Becário',
            image: require('../../assets/dodrio.png'),
            description: 'O Gustavo é como um Dodrio. Está sempre planejando e analisando tudo com muita sabedoria e cuidado, para que não fique paralisado de tanto pensar. Assim como o Dodrio, quando está guarda ninguém consegue lhe pegar desprevinido.'
        },
        {
            name: 'Julia Coelho',
            image: require('../../assets/clefairy.png'),
            description: 'A Julia é como um Clefairy, adorada por sua aparência fofa e encantadora! Assim como esse Pokémon raro e adorável, ela também é difícil de encontrar, mas quando aparece encanta a todos através da sua personalidade mágica e cativante.'
        },
        {
            name: 'Paula Beatriz',
            image: require('../../assets/vulpix.png'),
            description: 'A Bia é como o Vulpix, com uma personalidade calorosa e acolhedora, sempre busca agradar e proteger aqueles ao seu redor. Assim como esse Pokémon, possui um brilho especial que encanta a todos. Sabe controlar as situações com maestria e determinação.'
        }
    ];

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < profiles.length - 1) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
    };

    return (
        <View style={styles2.gradientContainer2}>
            <View style={styles2.navigationContainer}>
                <TouchableOpacity style={styles2.button} onPress={handlePrev} disabled={currentIndex === 0}>
                    <Text style={styles2.buttonText}>{'<'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles2.button} onPress={handleNext} disabled={currentIndex === profiles.length - 1}>
                    <Text style={styles2.buttonText}>{'>'}</Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles2.container3}>                
                {profiles.map((profile, index) => (
                    index === currentIndex && (
                        <View key={index} style={styles2.profileContainer}>
                            <Image source={profile.image} style={styles2.image} />
                            <Text style={styles2.text}>{profile.name}</Text>
                            <Text style={styles2.text}>{profile.description}</Text>
                        </View>
                    )
                ))}
            </ScrollView>

            
        </View>
    );
};

export default Privacidade;