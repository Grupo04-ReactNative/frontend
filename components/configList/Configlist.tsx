import React from 'react';
import { FlatList, View } from 'react-native';
import ConfigItem from '../configItem/ConfigItem';
import Header from '../Header/Header';
import { styles } from '../configList/style';

export interface ConfigItemData {
  id: string;
  title: string;
  icon?: string;
}

interface ConfigListProps {
  data: ConfigItemData[];
  selectedOption: string;
  onSelectOption: (option: string) => void;
}

const ConfigList: React.FC<ConfigListProps> = ({ data, selectedOption, onSelectOption }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ConfigItem 
          item={item}
          selectedOption={selectedOption}
          onSelectOption={onSelectOption}
        />
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListHeaderComponent={<Header title="Informações" />}
    />
  );
};

export default ConfigList;