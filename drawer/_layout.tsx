import {Drawer} from 'expo-router/drawer';

export default function layout() {
    return (
        <Drawer screenOptions={{headerStyle:{backgroundColor: 'yellow'}}} >
            <Drawer.Screen name="produtos" options={{title:'Produtos'}} />
            <Drawer.Screen name="categorias" options={{title:'Categorias'}} />
        </Drawer>
    )
}