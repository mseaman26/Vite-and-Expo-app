import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native-web'; // Import from react-native-web
import UniversalLink from './expoapp/components/UniversalLink/UniversalLink';

const HomePage = () => {

    const isWeb = Platform.OS === 'web';

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Shared Home Page!</Text>
            <UniversalLink href={isWeb ? '/profile' : 'ProfilePage'}>Go to Profile Page</UniversalLink>
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
