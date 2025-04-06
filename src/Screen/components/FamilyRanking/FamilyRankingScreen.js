import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const FamilyRankingScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/1034/1034149.png',
        }}
        style={styles.icon}
      />
      <Text style={styles.text}>Family Coming Soon...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
    opacity: 0.8,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FF9800',
  },
});

export default FamilyRankingScreen;
