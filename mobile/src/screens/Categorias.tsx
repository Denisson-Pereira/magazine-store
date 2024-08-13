import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { logoutService } from '../services/logoutService';
import { useGlobalMagazineContext } from '../context/MagazineContext';
import { IUser } from '../models/IUser';
import { useNavigate } from '../hooks/useNavigate';
import { MaterialIcons, FontAwesome5, Ionicons, AntDesign, Entypo, Fontisto } from '@expo/vector-icons';

export const Categorias = () => {
    const { navigate } = useNavigate()
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.categoryButton} onPress={() => navigate('Celulares')}>
                <MaterialIcons name='smartphone' size={24} color="#4CAF50" />
                <Text style={styles.categoryText}>Celulares e Smartphones</Text>
            </TouchableOpacity>
            <View style={styles.separatorContainer}>
                <View style={styles.separator} />
            </View>
            <TouchableOpacity style={styles.categoryButton} onPress={() => navigate('Notebooks')}>
                <FontAwesome5 name='laptop' size={24} color="#2196F3" />
                <Text style={styles.categoryText}>Laptops e Computadores</Text>
            </TouchableOpacity>
            <View style={styles.separatorContainer}>
                <View style={styles.separator} />
            </View>
            <TouchableOpacity style={styles.categoryButton} onPress={() => navigate('Tablets')}>
                <MaterialIcons name='tablet-mac' size={24} color="#FFC107" />
                <Text style={styles.categoryText}>Tablets e e-Readers</Text>
            </TouchableOpacity>
            <View style={styles.separatorContainer}>
                <View style={styles.separator} />
            </View>
            <TouchableOpacity style={styles.categoryButton}>
                <MaterialIcons name='home' size={24} color="#FF5722" />
                <Text style={styles.categoryText}>Móveis e Decoração</Text>
            </TouchableOpacity>
            <View style={styles.separatorContainer}>
                <View style={styles.separator} />
            </View>
            <TouchableOpacity style={styles.categoryButton}>
                <AntDesign name='car' size={24} color="#8BC34A" />
                <Text style={styles.categoryText}>Automóveis</Text>
            </TouchableOpacity>
            <View style={styles.separatorContainer}>
                <View style={styles.separator} />
            </View>
            <TouchableOpacity style={styles.categoryButton}>
                <Entypo name='drink' size={24} color="#9C27B0" />
                <Text style={styles.categoryText}>Alimentos e Bebidas</Text>
            </TouchableOpacity>
            <View style={styles.separatorContainer}>
                <View style={styles.separator} />
            </View>
            <TouchableOpacity style={styles.categoryButton}>
                <Fontisto name='camera' size={24} color="#3F51B5" />
                <Text style={styles.categoryText}>Câmeras e Equipamentos</Text>
            </TouchableOpacity>
            <View style={styles.separatorContainer}>
                <View style={styles.separator} />
            </View>
            <TouchableOpacity style={styles.categoryButton}>
                <Ionicons name='musical-notes-outline' size={24} color="#E91E63" />
                <Text style={styles.categoryText}>Música e Áudio</Text>
            </TouchableOpacity>
            <View style={styles.separatorContainer}>
                <View style={styles.separator} />
            </View>
            <TouchableOpacity style={styles.categoryButton}>
                <MaterialIcons name='fitness-center' size={24} color="#FF9800" />
                <Text style={styles.categoryText}>Esportes e Fitness</Text>
            </TouchableOpacity>
            <View style={styles.separatorContainer}>
                <View style={styles.separator} />
            </View>
            <TouchableOpacity style={styles.categoryButton}>
                <FontAwesome5 name='book' size={24} color="#795548" />
                <Text style={styles.categoryText}>Livros e Papelaria</Text>
            </TouchableOpacity>
            <View style={styles.separatorContainer}>
                <View style={styles.separator} />
            </View>
            <TouchableOpacity style={styles.categoryButton}>
                <MaterialIcons name='pets' size={24} color="#00BCD4" />
                <Text style={styles.categoryText}>Produtos para Animais</Text>
            </TouchableOpacity>
            <View style={styles.separatorContainer}>
                <View style={styles.separator} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    categoryButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 10,
        elevation: 2, // sombra para Android
        shadowColor: '#000', // sombra para iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    categoryText: {
        fontSize: 16,
        marginLeft: 10,
        color: '#333',
    },
    separatorContainer: {
        width: '100%',
        alignItems: 'center',
    },
    separator: {
        width: '90%',
        height: 1,
        backgroundColor: '#e0e0e0',
    },
});
