import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import GradientBackground from '../../components/GradientBackground/GradientBackground';
import { styles } from './styles';
import Spacer from '../../components/Spacer/spacer';
import ConfigList, { ConfigItemData } from '../../components/configList/Configlist';
import FaleConosco from '../../components/FaleConosco/FaleConosco';
import Sobre from '../../components/Sobre/Sobre'; 
import SobreNos from '../../components/SobreNos/SobreNos';

const InfoScreen: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>('Notificações');

    const data: ConfigItemData[] = [
        { id: '1', title: 'Fale Conosco', icon: 'inbox' },
        { id: '2', title: 'Sobre o aplicativo', icon: 'information-circle-outline' },
        { id: '3', title: 'Sobre Nós', icon: 'team' },
    ];

    const renderContent = () => {
        switch (selectedOption) {
            case 'Fale Conosco':
                return <FaleConosco />;
            case 'Sobre o aplicativo':
                return <Sobre />;
            case 'Sobre Nós':
                return <SobreNos />;
            default:
                return null;
        }
    };

    return (
        <SafeAreaView style={styles.outerContainer}>
            <GradientBackground
                colors={['#2403EC', '#B51AAD', '#EEC122']}
                style={styles.gradientContainer}
            >
                <Spacer lines={5} />
                <ConfigList 
                    data={data}
                    selectedOption={selectedOption}
                    onSelectOption={setSelectedOption}
                />
                {renderContent()}
            </GradientBackground>
        </SafeAreaView>
    );
};

export default InfoScreen;