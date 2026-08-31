import { Text, View, StyleSheet, Button, TouchableOpacity, Image, ScrollView} from "react-native";


export default function Card() {
    return(
        <View style={styles.container}>
            <ScrollView
                horizontal
                pagingEnabled 
                contentContainerStyle={styles.scroll}
            >
                <Image 
                source={require('../imagens/enxada.jpeg')}
                style={styles.imagem}
                resizeMode="cover"/>
                <Image 
                source={require('../imagens/pá.jpeg')}
                style={styles.imagem}
                resizeMode="cover"/>
                <Image 
                source={require('../imagens/rastelo.jpeg')}
                style={styles.imagem}
                resizeMode="cover"/>
            </ScrollView> 

            <Text style={styles.textCard}>Ofertas Incriveis!</Text>
            <View style={styles.button}>
                <Button 
                    title="COMPRE JÁ!"
                    onPress={()=> alert('A caminho!')}
                    color="#16A34A"
                />
            </View>
            <TouchableOpacity
                style={styles.touchable}
                onPress={()=>alert('Receba Inteligencia!')}
            >
                <Text style={styles.touchableText}>
                    Ver detalhes
                </Text>
            </TouchableOpacity>   
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8FAFC',
        overflow: 'hidden',
        borderRadius: 18,
        paddingBottom: 18,
        width: '90%,',
        maxWidth: 700,
        alignSelf:'center',
    },
    scroll:{
        width:'100%',
        flexDirection:'row',
        height: 400,
    },
    imagem:{
        height: '100%',
    },
    textCard:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#050505',
        textAlign: 'center',
        marginTop: 18,
        marginBottom: 18,
    },
    button:{
        marginHorizontal: 20,
        marginBottom: 10,
        borderRadius: 7,
        overflow: 'hidden',
    },
    touchable: {
        backgroundColor: '#8B0000',
        marginHorizontal: 20,
        paddingVertical: 11,
        borderRadius: 7,
        alignItems: 'center',
        elevation: 2,
    },
    touchableText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
