import React from 'react';
import {TouchableOpacity, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Boton = ({textoBoton, accionBoton}) => {
    return ( 
<TouchableOpacity onPress={accionBoton} style={styles.button}>
        <Text style={styles.buttonText}>{textoBoton}</Text>
    </TouchableOpacity>
     );
}
 
export default Boton;


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0693e3',
        padding: 10,
        borderRadius: 5,
        marginVertical:5
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});
