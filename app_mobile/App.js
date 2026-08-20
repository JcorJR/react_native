import React from 'react';
import {Text, View, Image, StyleSheet, ImageBackground} from 'react-native';

export default function App() {
  return ( 
    <ImageBackground
      source={require('./assets/imagem.jpeg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}> Meu App</Text>
        <Text style={styles.subtitle}>Bem Vienido!</Text>
      

        <button title="Entrar" onProgress={()=>{}}/> 
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10
  },

  subtitle: {
    fontSize: 18,
    color: 'ffffff',
    marginBottom: 20,
  },
});
