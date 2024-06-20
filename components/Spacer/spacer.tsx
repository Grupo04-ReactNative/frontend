import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Spacer = ({ lines = 10 }: { lines?: number }) => {
  return (
    <View>
      {Array.from({ length: lines }).map((_, index) => (
        <Text key={index} style={styles.spacerText}></Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  spacerText: {
    lineHeight: 20, // Ajuste conforme necessário
  },
});

export default Spacer;