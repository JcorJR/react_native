import { Text, View, StyleSheet, Button, TouchableOpacity, Image, ScrollView} from "react-native";


export default function Card() {
    return(
        <View style={styles.container}>
            <ScrollView>
                <Image 
                source={'./assets/imagens/enxada.jpeg'}
                style={styles.imagem}
                resizeMode="contain"/>
                <Image 
                source={'./assets/imagens/pá.jpeg'}
                style={styles.imagem}
                resizeMode="contain"/>
                <Image 
                source={'./assets/imagens/rastelo.jpeg'}
                style={styles.imagem}
                resizeMode="contain"/>
            </ScrollView>

            <Text>Ofertas Incriveis!</Text>
            
            <Button 
                style={styles.button}
                title="clique aqui"
                onPress={()=> alert('Funcionou!')}
            />
            <TouchableOpacity
                style={styles.touchable}
                onPress={()=>alert('Receba Inteligencia!')}
            >
                <Text style={styles.buttonText}>
                    Saiba mais!
                </Text>
            </TouchableOpacity>   
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#ffffff',
    },
    imagem:{
        width: '100%',
        height: 300,
    },
    button:{
        backgroundColor: '#2563eb',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    touchable: {
        backgroundColor: '#ebe825',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});