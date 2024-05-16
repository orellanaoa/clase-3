import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import creadorData from '../data/creador';
import Boton from '../components/Boton';
import RNPickerSelect from 'react-native-picker-select';

const Pantalla2 = ({ navigation }) => {
    const creador = creadorData[0];
    const irPantalla1 = () => {
        navigation.navigate('Pantalla1');
    };
    const irEjercicio = () => {
        navigation.navigate('Ejercicio');
    };

    const irIndicaciones = () => {
        navigation.navigate('Indicaciones');
    };

    const irAColores = () => {
        navigation.navigate('Colors');
    };

    const opciones = (opcion) => {
        switch (opcion) {
            case 1:
                // Código a ejecutar si opcion es igual a 1
                navigation.navigate('Pantalla1');
                break;
            case 2:
                // Código a ejecutar si opcion es igual a 2
                navigation.navigate('Indicaciones');
                break;
            case 3:
                // Código a ejecutar si opcion es igual a 2
                navigation.navigate('Ejercicio');
                break;
            case 4:
                navigation.navigate('Colors');
                break;
            // Puedes añadir más casos según sea necesario
            default:
            // Código a ejecutar si ninguno de los casos anteriores coincide con el valor de opcion
        }

    }



    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Creador: {creador.name}</Text>
                    <Text style={styles.title}>Descripción del Ejemplo:</Text>
                    <Text style={styles.description}>{creador.desc}, utilizando las siguientes
                        dependencias:  {'\n'}

                        <Text style={styles.lista}>react-native-picker-select    {'\n'} </Text>
                        <Text style={styles.lista}>@react-navigation/native-stack      {'\n'} </Text>

                        <Text style={styles.lista}>@react-navigation/native  </Text> </Text>
                </View>


                <RNPickerSelect
                    onValueChange={(value) => opciones(value)}
                    placeholder={{ label: 'Selecciona una pantalla...', value: null }} // Cambia el valor del placeholder aquí
                    items={[
                        { label: 'Regresar a Inicio', value: 1 },
                        { label: 'Trabajo en Clase', value: 2 },
                        { label: 'Perfil 3', value: 3 },
                        {label: 'Colores', value: 4},
                    ]}
                />
            </View>
        </View>
    );
};

export default Pantalla2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight || 0,
    },
    lista: {
        fontSize: 16,
        lineHeight: 24,
        marginLeft: 20, // Añade un margen a la izquierda para simular la lista
        fontWeight: 'bold', // Opcional: Puedes aplicar cualquier otro estilo que desees
        color: 'black', // Opcional: Color del texto de la lista
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '80%',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    textContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});
