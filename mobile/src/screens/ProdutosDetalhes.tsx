import React, { useEffect, useState, useRef } from 'react';
import { Image, StyleSheet, Text, View, ScrollView, Dimensions, Animated, TouchableOpacity, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { produtosIDService } from '../services/produtosIDService';
import { IProdutos } from '../models/IProdutos';
import { ProdutosDetalhesRouteProp } from '../@types/NavigationTypes';
import { AntDesign, Entypo, FontAwesome5, Fontisto } from '@expo/vector-icons';
import { descontos } from '../helpers/descontos';
import { parcerlar } from '../helpers/parcerlar';
import { Localizacao } from '../components/Localizacao';
import { useCart } from '../context/CartContext';
import { useNavigate } from '../hooks/useNavigate';
import { stringParaValor } from '../helpers/stringParaValor';

const { width: viewportWidth } = Dimensions.get('window');

export const ProdutosDetalhes = () => {
  const route = useRoute<ProdutosDetalhesRouteProp>();
  const { id } = route.params;
  const [produto, setProduto] = useState<IProdutos | null>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const { addCart } = useCart()
  const { navigate } = useNavigate()

  const adicionarCompra = (item: IProdutos) => {
    addCart(item)
    navigate('home')
    Alert.alert(
      'Sucesso',
      'Produto adicionado ao carrinho!',
      [
        {text: 'Continuar comprando'}
      ]
    )
  }

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

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await produtosIDService(id);
        setProduto(response);
      } catch (error) {
        console.log('Erro ao consultar dados: ', error);
      }
    };
    fetchProduto();
  }, [id]);

  return (
    <View style={styles.container}>
      {produto ? (
        <>
          <ScrollView style={styles.containerScroll} showsVerticalScrollIndicator={false}>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
              )}
              scrollEventThrottle={16}
            >
              {[produto.imagem1, produto.imagem2, produto.imagem3].map((image, index) => (
                <View style={{ width: viewportWidth, justifyContent: 'center', alignItems: 'center' }} key={index}>
                  <Image
                    source={{ uri: image }}
                    style={styles.image}
                    resizeMode='contain'
                  />
                </View>
              ))}
            </ScrollView>
            <View style={styles.dotsContainer}>
              {[produto.imagem1, produto.imagem2, produto.imagem3].map((_, index) => {
                const opacity = scrollX.interpolate({
                  inputRange: [
                    viewportWidth * (index - 1),
                    viewportWidth * index,
                    viewportWidth * (index + 1)
                  ],
                  outputRange: [0.3, 1, 0.3],
                  extrapolate: 'clamp'
                });
                return <Animated.View key={index} style={[styles.dot, { opacity }]} />;
              })}
            </View>
            <View style={styles.containerDetalhes}>
              <View style={styles.indica}>
                <Text style={styles.indicaTexto}>Magazine Shop indica </Text>
                <Entypo name='check' color={'white'} size={15} />
              </View>
              <View>
                <Text style={styles.textoNome}>{produto.nome}</Text>
              </View>
              <View style={styles.containerStar}>
                {renderStars(produto.avaliacao)}
                <Text style={styles.textStar}>{produto.avaliacao}</Text>
              </View>
              <View style={styles.containerVendido}>
                <Text style={styles.textVendido1}>Vendido e entregue por </Text>
                <Text style={styles.textVendido2}>Magazine Shop</Text>
              </View>
              <View style={styles.desconto}>
                <Text style={styles.semDesconto}> {stringParaValor(produto.valor)}</Text>
                <View style={styles.containerDesconto}>
                  <AntDesign name='arrowdown' color={'white'} />
                  <Text style={styles.descontoValor}>15%</Text>
                </View>
              </View>
              <View>
                <Text style={styles.textValor}> {stringParaValor(descontos(produto.valor, 15))}</Text>
                <Text style={styles.pix}>No Pix</Text>
                <Text style={styles.textParcelado}>Ou de 10x de R$ {parcerlar(produto.valor)} sem juros no cartão de crédito</Text>
              </View>
              <View style={styles.containerComprar}>
                <TouchableOpacity style={styles.btnCarrinho} onPress={() => adicionarCompra(produto)}>
                  <FontAwesome5 name='shopping-bag' size={20} color={'white'} />
                  <Text style={styles.textComprar}>Adicionar ao carrinho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnComprar}>
                  <FontAwesome5 name='store-alt' size={20} color={'white'} />
                  <Text style={styles.textComprar}>Retire na loja grátis</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.detalhes}>
                <Text style={styles.ficha}>Descrição e ficha técnica</Text>
                <Text style={styles.codigo}>Código 23798546513{produto.id}</Text>
                <View style={styles.detailsContainer}>
                  <View style={styles.detailRow}>
                    <Text style={styles.label}>Marca: </Text>
                    <Text style={styles.value}>{produto.marca}</Text>
                  </View>
                  <View style={styles.detailRow}>
                    <Text style={styles.label}>Quantidade: </Text>
                    <Text style={styles.value}>{produto.quantidade}</Text>
                  </View>
                  <View style={styles.detailRow}>
                    <Text style={styles.label}>Modelo: </Text>
                    <Text style={styles.value}>{produto.modelo}</Text>
                  </View>
                  <View style={styles.detailRow}>
                    <Text style={styles.label}>Sobre: </Text>
                    <Text style={styles.value}>{produto.sobre}</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </>
      ) : (
        <Text>Carregando...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    gap: 16
  },
  image: {
    width: viewportWidth,
    height: 280,
    resizeMode: 'cover',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#595959',
    marginHorizontal: 8,
  },
  containerDetalhes: {
    padding: 15,
    gap: 8
  },
  containerScroll: {
    flex: 1,
  },
  indica: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#00A6EB',
    padding: 4,
    width: '43%',
    borderRadius: 5,
  },
  descontoValor: {
    fontSize: 11,
    color: 'white'
  },
  indicaTexto: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
    textAlign: 'center'
  },
  textoNome: {
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'left'
  },
  starsContainer: {
    flexDirection: 'row',
  },
  containerStar: {
    flexDirection: 'row',
    gap: 10,
  },
  textStar: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  containerVendido: {
    flexDirection: 'row',
  },
  textVendido1: {
    fontSize: 15,
  },
  textVendido2: {
    fontSize: 15,
    fontWeight: '700'
  },
  textValor: {
    fontWeight: '800',
    fontSize: 30,
    color: '#000000',
  },
  pix: {
    fontSize: 12,
  },
  textParcelado: {
    fontSize: 15,
    color: '#8f8c8c',
  },
  tituloCelulares: {
    justifyContent: 'center',
    padding: 5,
    paddingLeft: 20,
    paddingTop: 10,
  },
  desconto: {
    flexDirection: 'row'
  },
  semDesconto: {
    fontSize: 17,
    color: '#db2c2c',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: '#db2c2c',
  },
  containerDesconto: {
    flexDirection: 'row',
    marginLeft: 20,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1dc525',
    borderRadius: 10,
  },
  btnCarrinho: {
    backgroundColor: '#1dc525',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 45,
    borderRadius: 5,
    flexDirection: 'row',
    gap: 5
  },
  btnComprar: {
    backgroundColor: '#00A6EB',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 45,
    borderRadius: 5,
    flexDirection: 'row',
    gap: 5
  },
  containerComprar: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  },
  textComprar: {
    fontSize: 17,
    fontWeight: '700',
    color: 'white'
  },
  ficha: {
    fontSize: 15,
    color: '#585858',
    fontWeight: '700'
  },
  codigo: {
    fontSize: 15,
    color: '#8f8c8c',
  },
  detalhes: {
    gap: 5
  },
  detailsContainer: {

  },
  detailRow: {
    flexDirection: 'row',
    marginVertical: 5,
    flexWrap: 'wrap',
  },
  label: {
    fontWeight: 'bold',
    textAlign: 'justify'
  },
  value: {
    fontWeight: 'normal',
    flex: 1,
    flexWrap: 'wrap',
    textAlign: 'justify'
  },
});
