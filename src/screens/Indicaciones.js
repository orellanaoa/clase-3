import React from 'react';
import { View, ScrollView, StyleSheet, Text, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Boton from '../components/Boton';

const Indicaciones = ({ navigation }) => {

    const irPantalla1 = () => {
        navigation.navigate('Pantalla1');
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.card}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Trabajo en clase:</Text>
                        <Text style={styles.title}>Indicaciones: </Text>
                        <Text style={styles.description}>
                        Agregar una pantalla y replicar la siguiente pantalla, las imagenes pueden ser otras: 
                        </Text>

                    </View>
                    <Boton
                        textoBoton='Regresar a Inicio'
                        accionBoton={irPantalla1}
                    />
                </View>
                        <Image
                            style={styles.image}
                            source={require('../img/ejercicio2.jpg')}/>
                            
                <Image
                            style={styles.image}
                            source={require('../img/ejercicio1.jpg')}/>
            </ScrollView>
        </View>
    );
};

export default Indicaciones;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight || 0,
        paddingTop:30
    },
    scrollView: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '95%',
        alignItems: 'center',
    },
    image: {
        width: 206, // Aumenta el ancho de la imagen
        height: 459, // Aumenta la altura de la imagen
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
});
