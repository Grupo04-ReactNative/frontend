import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const currentYear = new Date().getFullYear();

const MonthYear = () => {
    const [selectedMonth, setSelectedMonth] = useState<string>(months[0]);
    const [selectedYear, setSelectedYear] = useState<number>(currentYear);

    const handleMonthPress = (month: string) => {
        setSelectedMonth(month);
    };

    const incrementYear = () => {
        setSelectedYear(prevYear => prevYear + 1);
    };

    const decrementYear = () => {
        setSelectedYear(prevYear => prevYear - 1);
    };

    return (
        <View style={styles.container}>
            <View style={styles.monthContainer}>
                {months.map((month, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[styles.monthButton, selectedMonth === month && styles.selectedMonthButton]}
                        onPress={() => handleMonthPress(month)}
                    >
                        <Text style={styles.monthButtonText}>{month}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.yearButtonContainer}>
                <TouchableOpacity onPress={decrementYear} style={styles.arrowButton}>
                    <Text style={styles.arrowText}>{"<"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.yearDisplayButton}>
                    <Text style={styles.yearDisplayText}>{selectedYear}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={incrementYear} style={styles.arrowButton}>
                    <Text style={styles.arrowText}>{">"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MonthYear;
