import React from 'react';
import ProfileViewer from '../../components/ProfileViewer/ProfileViewer';
import { ImageSourcePropType } from 'react-native';

const profiles: { name: string; image: ImageSourcePropType; description: string }[] = [
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

const SobreNos: React.FC = () => {
    return (
        <ProfileViewer profiles={profiles} />
    );
};

export default SobreNos;