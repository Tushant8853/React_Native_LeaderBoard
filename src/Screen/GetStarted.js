import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const GetStarted = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../Img/unnamed.png')} // <-- Make sure to place your image in the correct path
        style={styles.image}
      />
      <Text style={styles.title}>Welcome to the App!</Text>
      <Text style={styles.subtitle}>Your Gaming journey starts here.</Text>
      <View style={styles.buttonContainer}>
        <Button 
          title="Get Started" 
          color="#4CAF50"
          onPress={() => navigation.navigate('Screen1')} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '80%',
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default GetStarted;
