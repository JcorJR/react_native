import { Link } from 'expo-router';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { useState } from 'react';

export default function cadastro(){
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    return(
        <View style={style.container}>
            <Text>Cadastro</Text>
            
            <TextInput 
                placeholder='Seu nome completo' 
                style={style.input} 
                value={nome} 
                onChangeText={setNome}
             />
            <Text>{nome}</Text>
          
            <TextInput
                placeholder='email@email.com' 
                style={style.input} 
                keyboardType='email-address' 
                value={email} 
                onChangeText={setEmail} />
          
            <TextInput 
                placeholder='Senha123' 
                style={style.input} 
                secureTextEntry
                value={senha} 
                onChangeText={setSenha}/>

            <TouchableOpacity style={style.btn}>
                <Text style={style.btnText}>Cadastre-se</Text>
            </TouchableOpacity>

            <Text>Já tem cadastro? {' '}
                <Link href="/login" style={style.link}>fazer login</Link>
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
    },
    link:{
        color: 'blue',
        fontWeight: 'bold',
    },
    input:{
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        marginVertical: 10, 
        width: '30%',
    },
    btn: {
        backgroundColor: '#8B0000',
        marginHorizontal: 20,
        paddingVertical: 11,
        borderRadius: 7,
        alignItems: 'center',
        elevation: 2,
        width:'30%'
    },
    btnText:{
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    }
})