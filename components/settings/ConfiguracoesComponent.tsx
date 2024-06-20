import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from '../../Pages/Settings/styles';

const ConfiguracoesComponent = ({ data, selectedOption, onSelectOption }: { 
  data: { id: string; title: string; icon?: JSX.Element }[], 
  selectedOption: string, 
  onSelectOption: (option: string) => void 
}) => {
  const handlePress = (item: { id: string; title: string; icon?: JSX.Element }) => {
      onSelectOption(item.title);
  };

  const renderItem = ({ item }: { item: { id: string; title: string; icon?: JSX.Element } }) => (
      <TouchableOpacity onPress={() => handlePress(item)}>
          <View style={[styles.item, item.title === selectedOption && styles.selectedItem]}>
              <View style={styles.item2}>
                  {item.icon && <View style={styles.icon}>{item.icon}</View>}
                  <Text style={styles.itemText}>{item.title}</Text>
              </View>
          </View>
      </TouchableOpacity>
  );

  return (
      <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListHeaderComponent={() => <Text style={styles.header}>Configurações</Text>}
      />
  );
};

export default ConfiguracoesComponent;