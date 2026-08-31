import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    background:{
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        padding: 60,
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#050404',
        textAlign:'center',
        marginTop:10,
    },
    text: {
        fontSize: 18,
        color: '#5a5757',
        textAlign: 'center',
        marginTop: 4,
        marginBottom: 20,
    },
    lista: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
  },
    
});

export default styles;
