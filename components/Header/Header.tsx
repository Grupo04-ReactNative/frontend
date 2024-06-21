import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../Header/style';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View>
      <Text style={styles.header}>{title}</Text>
    </View>
  );
};

export default Header;