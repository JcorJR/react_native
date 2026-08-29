import React from 'react';
import {Text, View, Image, ImageBackground,FlatList,ScrollView } from 'react-native';
import styles from './styles/styles'
import Card from './assets/components/card';

export default function App() {
  const produtos = [
  {
    id: '1',
    nome: 'Notebook',
    preco: '3500'
  },
  {
    id: '2',
    nome: 'Celular',
    preco: '2200'
  },
  {
    id: '3',
    nome: 'Tablet',
    preco: '1800'
  }
];
  return ( 
    <ImageBackground
      source={require('./assets/imagens/fundo.jpeg')}
      style={styles.background}
    >
      <View style={styles.container}>
        
        <Text style={styles.title}> Meu App</Text>
        <Text style={styles.text}>Bem Vienido!</Text>
        
        <FlatList
          data={produtos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text>{item.nome} - R$ {item.preco}</Text>
          )}
        />

        <Card />

      </View>
    </ImageBackground>
  );
}

