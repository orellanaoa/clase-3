import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, FlatList, Image, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Colores, Colores2 } from '../data/colors';
import Boton from '../components/Boton';

const { width } = Dimensions.get('window');

const Colors = ({ navigation }) => {
    const informacion = Colores;
    const informacion2 = Colores2;

    const irPantalla2 = async () => {
        navigation.navigate('Pantalla2');
    };

    const cardWidth = (width - 30) / 3;

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Colores aquosos</Text>
            </View>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={informacion}
                    numColumns={3}
                    contentContainerStyle={styles.flatListContent}
                    renderItem={({ item }) => (
                        <View style={[styles.cardContainer, { width: cardWidth, backgroundColor: item.color }]}>
                            <Image source={item.src} style={styles.image} />
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Natural colors</Text>
            </View>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={informacion2}
                    numColumns={3}
                    contentContainerStyle={styles.flatListContent}
                    renderItem={({ item }) => (
                        <View style={[styles.cardContainer, { width: cardWidth, backgroundColor: item.color }]}>
                            <Image source={item.src} style={styles.image} />
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>





            <Boton
                textoBoton='Ir a creditos'
                accionBoton={irPantalla2}
            />
        </View>
    );
};

export default Colors;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        marginTop: StatusBar.currentHeight || 30,
    },
    flatListContainer: {
        flex: 1,
        marginHorizontal: 5,
    },
    flatListContent: {
        flexGrow: 1,
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
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    titleContainer: {
        backgroundColor: '#132E32', // Color de fondo del título
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
    },
    titleText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF', // Color del texto del título
    },
});
