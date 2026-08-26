import { Text, View, StyleSheet} from "react-native";


export default function Card() {
    return(
        <View style={styles.container}>
            <Text>Soy un Card</Text>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    }
});