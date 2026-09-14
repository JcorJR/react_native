import { StyleSheet, View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Dashboard() {

    const {user} = useLocalSearchParams()

    return(
        <View style={style.container}>
            <Text>Bem-Vindo(a)</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        paddingTop: 50,
    },

})