import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function RootLayout(){
    return(
        <Tabs screenOptions={{headerStyle:{backgroundColor: 'green'}, headerTintColor: 'white', tabBarActiveTintColor: 'green', tabBarActiveBackgroundColor: 'yellow'}}>
            <Tabs.Screen name="dashboard" options={{title:'Dashboard', tabBarIcon:()=> <FontAwesome name="home" size={24} color="black" />}}/>
            <Tabs.Screen name="perfil"  options={{title:'Perfil'}}/>
        </Tabs>
    )
}