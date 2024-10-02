import React from 'react';
import { View, Text, StyleSheet } from 'react-native-web'; // Import from react-native-web

const HomePage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Shared Home Page!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
        height: '100%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default HomePage;
