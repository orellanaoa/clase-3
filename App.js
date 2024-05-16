import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/*Importación de las dependencias para crear la navegación */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Importación de las pantallas */
import Pantalla1 from './src/screens/Pantalla1';
import Pantalla2 from './src/screens/Pantalla2';
import Ejercicio from './src/screens/Ejercicio';
import Indicaciones from './src/screens/Indicaciones';
import Colors from './src/screens/Colors';


export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Pantalla1'

        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Pantalla1" component={Pantalla1} />
        <Stack.Screen name="Pantalla2" component={Pantalla2} />
        <Stack.Screen name="Ejercicio" component={Ejercicio} />
        <Stack.Screen name="Indicaciones" component={Indicaciones} />
        <Stack.Screen name="Colors" component={Colors}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
