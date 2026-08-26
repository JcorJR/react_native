import React from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
import styles from './styles/styles'

export default function App() {
  return ( 
    <ImageBackground
      source={require('./assets/imagens/Fundo.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}> Meu App</Text>
        <Text style={styles.text}>Bem Vienido!</Text>

        {/* <button title="Entrar" onProgress={()=>{}}/>  */}
      </View>
    </ImageBackground>
  );
}

