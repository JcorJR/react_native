import { StyleSheet, View, Text } from "react-native";

export default function Item({ nome }){
    return(
        <View style={styles.item}> 
            <Text style={styles.text}>
                {nome}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
    backgroundColor: '#F3F7FD',
    width: 80,
    height: 50,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ddd',
    marginRight: 12,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#202838',
    fontSize: 17,
    fontWeight: '500',
  },
});