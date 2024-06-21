import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from '../configItem/style';
import { ConfigItemData } from '../configList/Configlist';

interface ConfigItemProps {
  item: ConfigItemData;
  selectedOption: string;
  onSelectOption: (option: string) => void;
}

const ConfigItem: React.FC<ConfigItemProps> = ({ item, selectedOption, onSelectOption }) => {
  const handlePress = () => {
    onSelectOption(item.title);
  };

  const getIcon = (name: string | undefined) => {
    switch (name) {
      case 'inbox':
        return <AntDesign name="inbox" size={24} color="black" />;
      case 'information-circle-outline':
        return <Ionicons name="information-circle-outline" size={24} color="black" />;
      case 'team':
        return <AntDesign name="team" size={24} color="black" />;
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.item, item.title === selectedOption && styles.selectedItem]}>
        <View style={styles.item2}>
          <View style={styles.icon}>{getIcon(item.icon)}</View>
          <Text style={styles.itemText}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ConfigItem;