import React from 'react';
import {Text, View, Image, ImageBackground,FlatList,ScrollView } from 'react-native';
import styles from './styles/styles'
import Card from './assets/components/card';
import Item from './assets/components/Item';

const categorias = [
  {
    id: '1',
    nome: 'Pás',
  },
  {
    id: '2',
    nome: 'Rastelos',
  },
  {
    id: '3',
    nome: 'Enxadas',
  },
]

export default function App() {
  return ( 
    <ImageBackground
      source={require('./assets/imagens/fundo.jpeg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>

        <Text style={styles.title}> FaZenda</Text>
        <Text style={styles.text}>Todas as ferrementas que seu lote precisa em um só lugar</Text>
        
        <FlatList
          data={categorias}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item nome={item.nome}/>
          )}
          contentContainerStyle={styles.lista}
        /> 

        <Card />

      </View>
    </ImageBackground>
  );
}

