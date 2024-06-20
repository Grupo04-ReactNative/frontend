import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles';

const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const years = Array.from(new Array(100), (val, index) => index + 1920); 

const MonthYear = () => {
    const [selectedMonth, setSelectedMonth] = useState<string>(months[0]);
    const [selectedYear, setSelectedYear] = useState<number>(years[0]);

    return (
        <View style={styles.container}>
            <Picker
                selectedValue={selectedMonth}
                style={styles.picker}
                onValueChange={(itemValue: string) => setSelectedMonth(itemValue)}>
                {months.map((month, index) => (
                    <Picker.Item key={index} label={month} value={month} />
                ))}
            </Picker>
            <Picker
                selectedValue={selectedYear}
                style={styles.picker}
                onValueChange={(itemValue: number) => setSelectedYear(itemValue)}>
                {years.map((year, index) => (
                    <Picker.Item key={index} label={year.toString()} value={year} />
                ))}
            </Picker>
        </View>
    );
};



export default MonthYear;
