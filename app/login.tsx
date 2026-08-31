import { Link } from 'expo-router';
import{Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

export default function Login(){
    return(
        
        <View style={style.container}>
            <Text>Login</Text>

            <TextInput placeholder='email@email.com' style={style.input} keyboardType='email-address'/>
            <TextInput placeholder='Senha123' style={style.input} secureTextEntry/>
            
            <TouchableOpacity style={style.btn}>
                <Text style={style.btnText}>Cadastre-se</Text>
            </TouchableOpacity>

            <Text>Não tem login? {' '}
                <Link style={style.link} href="/cadastro">Cadastre-se</Link>
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        borderRadius: 10,
    },
    link:{
        color: 'blue',
        fontWeight: 'bold',
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
    },
    input:{
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        marginVertical: 10, 
        width: '30%',
    },
})