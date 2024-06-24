import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../Header/style';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <View>
      <Text style={styles.header}>{title}</Text>
    </View>
  );
};

export default Header;