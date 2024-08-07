import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigate } from '../hooks/useNavigate';
import { CartItem, useCart } from '../context/CartContext';

export const Carrinho = () => {
  const { cart, removeCart, incrementQuantity, decrementQuantity } = useCart();
  const { navigate } = useNavigate();

  const renderItem = ({ item }: { item: CartItem }) => (
    <View style={styles.item}>
      <TouchableOpacity
        style={styles.itemContent}
        onPress={() => navigate('ProdutosDetalhes', { id: item.id })}
      >
        <Image
          source={{ uri: item.imagem1 }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.nome}</Text>
          <Text style={styles.textValor}>R$ {item.valor},00</Text>
          <Text style={styles.quantity}>Quantidade: {item.quantity}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.buttonsContainer}>
        <View style={styles.incrementDecrementContainer}>
          <TouchableOpacity style={styles.button} onPress={() => incrementQuantity(item.cartId)}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => decrementQuantity(item.cartId)}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.removeButton} onPress={() => removeCart(item.cartId)}>
          <Text style={styles.removeButtonText}>Remover</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={item => item.cartId}
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
    marginTop: 20
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
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 270,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  textContainer: {
    marginLeft: 10,
  },
  text: {
    marginTop: 5,
    fontSize: 12
  },
  textValor: {
    fontWeight: '800',
    fontSize: 15,
    color: '#000000',
  },
  quantity: {
    marginTop: 5,
    fontSize: 12,
  },
  buttonsContainer: {
    flexDirection: 'column', 
    alignItems: 'center',
  },
  incrementDecrementContainer: {
    flexDirection: 'row',
    marginBottom: 5, 
  },
  button: {
    backgroundColor: '#00A6EB',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  removeButton: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 5,
    width: 80, 
  },
  removeButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center',
  },
});
