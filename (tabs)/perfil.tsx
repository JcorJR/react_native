import { StyleSheet, View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Perfil() {

    const {user} = useLocalSearchParams()

    return(
        <View style={style.container}>
            <Text>Perfil</Text>
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