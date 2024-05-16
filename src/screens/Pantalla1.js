import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, FlatList, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import data from '../data/data';
import Boton from '../components/Boton';

const Pantalla1 = ({ navigation }) => {
    const informacion = data;

    const irPantalla2 = async () => {
        navigation.navigate('Pantalla2');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mostrando Informacion horizontal</Text>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={informacion}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <View style={styles.cardContainer}>
                            <Image source={item.src} style={styles.image} />
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>

            <Text style={styles.texto}>Mostrando Informacion horizontal, utilizando el componente FlatList y la propiedad horizontal con valor true</Text>

            <Boton
            textoBoton='Ir a creditos'
            accionBoton={irPantalla2}
            />
        </View>
    );
};

export default Pantalla1;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        marginTop: StatusBar.currentHeight || 20,
    },
    flatListContainer: {
        height: 160, // Altura fija para evitar el crecimiento automático
        marginHorizontal:5
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems:'center'
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    texto:{
        marginHorizontal:15
    }
});
