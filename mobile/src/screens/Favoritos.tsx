import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useFavorites } from '../context/FavoritesContext';
import { useNavigate } from '../hooks/useNavigate';
import { IProdutos } from '../models/IProdutos';

export const Favoritos = () => {
  const { favorites } = useFavorites();
  const { navigate } = useNavigate();

  const renderItem = ({ item }: { item: IProdutos }) => (
    <TouchableOpacity
      key={item.id}
      style={styles.item}
      onPress={() => navigate('ProdutosDetalhes', { id: item.id })}
    >
      <Image
        source={{ uri: item.imagem1 }}
        style={styles.image}
      />
      <Text style={styles.text}>{item.nome}</Text>
      <Text style={styles.textValor}>R$ {item.valor},00</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 5,
  },
  textValor: {
    fontWeight: '800',
    fontSize: 18,
    color: '#000000',
  },
});
