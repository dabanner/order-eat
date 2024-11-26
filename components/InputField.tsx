import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

export const InputField = ({ label, placeholder, secureTextEntry, keyboardType, autoCapitalize, onChangeText }) => {
    return (
        <View style={styles.inputGroup}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
                autoCorrect={false}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputGroup: {
        marginBottom: 24,
    },
    label: {
        fontSize: 12,
        fontWeight: '600',
        marginBottom: 8,
        color: '#333',
    },
    input: {
        height: 48,
        backgroundColor: '#F5F6FA',
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 16,
    },
});
