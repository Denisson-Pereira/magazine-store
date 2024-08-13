import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useFavorites } from '../context/FavoritesContext';
import { useNavigate } from '../hooks/useNavigate';
import { IProdutos } from '../models/IProdutos';
import { Fontisto, AntDesign } from '@expo/vector-icons';
import { stringParaValor } from '../helpers/stringParaValor';
import { descontos } from '../helpers/descontos';

export const Favoritos = () => {
    const { favorites, toggleFavorite } = useFavorites();
    const { navigate } = useNavigate();

    const renderStars = (rating: string) => {
        const numericRating = Math.min(5, Math.max(0, Math.round(parseFloat(rating))));
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <Fontisto
                    key={i}
                    name="star"
                    size={15}
                    color={i < numericRating ? "#ffd700" : "#cccccc"}
                />
            );
        }
        return <View style={styles.starsContainer}>{stars}</View>;
    };

    const renderItem = ({ item }: { item: IProdutos }) => {
        const isFavorite = favorites.some(fav => fav.id === item.id);
        return (
            <TouchableOpacity 
                key={item.id}
                style={styles.item}
                onPress={() => navigate('ProdutosDetalhes', { id: item.id })}
            >
                <Image
                    source={{ uri: item.imagem1 }}
                    style={styles.image}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{item.nome}</Text>
                    <Text style={styles.textValor}>R$ {item.valor},00</Text>
                    <View style={styles.containerStar}>
                        {renderStars(item.avaliacao)}
                    </View>
                </View>
                <View style={styles.coracao}>
                    <TouchableOpacity onPress={() => toggleFavorite(item)}>
                        <AntDesign name={isFavorite ? 'heart' : 'hearto'} size={30} color={isFavorite ? 'red' : 'black'} />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={favorites}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F1',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    item: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#c0bfbfea',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 380,
    },
    image: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
        gap: 5
    },
    text: {
        marginTop: 5,
        fontSize: 10,
        fontWeight: '700'
    },
    textValor: {
        fontWeight: '800',
        fontSize: 18,
        color: '#00A6EB',
    },
    starsContainer: {
        flexDirection: 'row',
    },
    containerStar: {
        flexDirection: 'row',
        gap: 10,
    },
    coracao: {
        paddingRight: 10,
    },
});
