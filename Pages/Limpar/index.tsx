import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native'
import { styles } from './styles';
import Button from '../../components/Button/button';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export default function Limpar() {

  const { clearUserInfo } = useContext(UserContext);

    return (
      <SafeAreaView style={styles.outerContainer}>
      <LinearGradient
         colors={['#2403EC', '#B51AAD', '#EEC122']}
         style={styles.gradientContainer}
       >
       
        
        <Button 
                isOutlined={false}
                buttonText={'Limpar informações'}
                onPress={clearUserInfo}
              />
              
     </LinearGradient>
  </SafeAreaView>
    );
  }