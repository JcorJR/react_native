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
      <View style={styles.container}>
        <Text style={styles.title}> Meu App</Text>
        <Text style={styles.text}>Bem Vienido!</Text>

        <Card />

        <ScrollView 
        contentContainerStyle={styles.content}> 
          <Text>Item 1</Text>
          <Text>Item 2</Text>
          <Text>Item 3</Text>
          <Text>Item 4</Text>
        </ScrollView>

        <FlatList
        data={produtos}
        keyExtractor={(item)=>item.id}
        renderItem={({item}) => (<Text>{item.nome}</Text>)}
        />
      </View>
  );
}

