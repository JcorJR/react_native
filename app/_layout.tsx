import {Stack} from "expo-router";
import { StackScreen } from "expo-router/build/layouts/stack-utils";
import { View, Text, StyleSheet } from "react-native";

export default function RootLayout(){
    return(
        <Stack screenOptions={{headerTintColor: 'red',  
            headerStyle: {backgroundColor: 'yellow'}, }}>
                
            <Stack.Screen name={"index"} 
                        options={{title:'Minha Loja', headerShown: false}}/>
            <Stack.Screen name={"login"} 
                        options={{title:'Área restrita'}}/>
            <Stack.Screen name={"cadastro"} 
                        options={{title:'Criar conta'}}/>
        </Stack>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cabecalho: {
        width: '100%',
        padding:20,
        backgroundColor: 'blue',
    }
})