// ProfilePage.jsx
'use client'
import React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';

const ProfilePage = () => {
    

    const isWeb = Platform.OS === 'web';


    // Sample user data
    const user = {
        name: "John Doe",
        bio: "Software Developer | Tech Enthusiast",
        profileImage: "https://via.placeholder.com/150" // Placeholder image
    };

    return (
      <>
        {styles.container && <View style={styles.container}>
          <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.bio}>{user.bio}</Text>
          <Text style={styles.link} accessibilityRole="link" href={`/`}>
            <View><Text>Back home</Text></View>
          </Text>
        </View>}
      </>
    );
};

// Basic styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Makes the image circular
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});

export default ProfilePage;
