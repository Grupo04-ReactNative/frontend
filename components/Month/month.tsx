import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface MonthProps {
    months: string[];
    updateUserMonth: (newUserMonth: string) => Promise<void>;
    userMonthIndex: number 
}

const Month = ({ months, updateUserMonth, userMonthIndex }: MonthProps) => {
    const [selectedMonth, setSelectedMonth] = useState<string>(months[userMonthIndex]);
    
    const handleMonthPress = (month: string) => {
        setSelectedMonth(month);
        updateUserMonth(month);
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
        </View>
    );
};

export default Month;
