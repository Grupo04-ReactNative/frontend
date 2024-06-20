import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';



const ConfiguracoesComponent = ({ data }: { data: { id: string; title: string; icon?: JSX.Element }[] }) => {
    const renderItem = ({ item }: { item: { id: string; title: string; icon?: JSX.Element } }) => (
      <View style={styles.item}>
        <View style={styles.item2}>
        {item.icon && <View style={styles.icon}>{item.icon}</View>}
        <Text style={styles.itemText} > {item.title} </Text>
        </View>
               
      </View>
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