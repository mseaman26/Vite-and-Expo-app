import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const LinkWrapper = ({ href, children, style }) => {
  return (
    <Link href={href} asChild>
      <TouchableOpacity style={[styles.linkContainer, style]}>
        <Text style={styles.linkText}>{children}</Text>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  linkContainer: {
    padding: 10,
    margin: 5,
    backgroundColor: '#e0e0e0', // Optional styling
    borderRadius: 5,
  },
  linkText: {
    color: '#007bff', // Link color
    fontSize: 16,
  },
});

export default LinkWrapper;