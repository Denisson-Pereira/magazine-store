import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import { IProdutos } from '../models/IProdutos';
import { produtosService } from '../services/produtosService';
import { useNavigate } from '../hooks/useNavigate';
import { AntDesign, Fontisto } from '@expo/vector-icons';
import { parcerlar } from '../helpers/parcerlar';
import { descontos } from '../helpers/descontos';
import { useFavorites } from '../context/FavoritesContext';
import { stringParaValor } from '../helpers/stringParaValor';

export const ProdutosCelulares = () => {
  const [dados, setDados] = useState<IProdutos[]>([]);
  const { navigate } = useNavigate();
  const { favorites, toggleFavorite } = useFavorites();

  const [celulares, setCelulares] = useState<IProdutos[]>([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await produtosService();
        setDados(response);
        setCelulares(dados.filter(item => item.categoria == 'celular'))
      } catch (error) {
        console.log('Erro ao consultar dados: ', error);
      }
    };
    fetchData();
  }, [celulares]);


  const renderStars = (rating: string) => {
    const numericRating = Math.min(5, Math.max(0, Math.round(parseFloat(rating))));
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Fontisto
          key={i}
          name="star"
          size={10}
          color={i < numericRating ? "#ffd700" : "#cccccc"}
        />
      );
    }
    return <View style={styles.starsContainer}>{stars}</View>;
  };

  return (
    <View style={styles.container}>
      <View style={styles.tituloCelulares}>
        <Text style={styles.textoTituloSecao}>📱 Os smartphones mais procurados!</Text>
      </View>
      <View style={styles.grid}>
        {celulares.map((item) => {
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
              <View style={styles.coracao}>
                <TouchableOpacity onPress={() => toggleFavorite(item)}>
                  <AntDesign name={isFavorite ? 'heart' : 'hearto'} size={30} color={isFavorite ? 'red' : 'black'} />
                </TouchableOpacity>
              </View>
              <Text style={styles.text}>{item.nome}</Text>
              <View>
                {renderStars(item.avaliacao)}
              </View>
              <View style={styles.desconto}>
                <Text style={styles.semDesconto}> {stringParaValor(item.valor)}</Text>
                <View style={styles.containerDesconto}>
                  <AntDesign name='arrowdown' color={'white'} />
                  <Text style={styles.descontoValor}>15%</Text>
                </View>
              </View>
              <Text style={styles.textValor}> {stringParaValor(descontos(item.valor, 15))}</Text>
              <Text style={styles.pix}>No Pix</Text>
              <Text style={styles.textParcelado}>Ou de 10x de R$ {parcerlar(item.valor)} sem juros no cartão de crédito</Text>
              <Text style={styles.textEntrega}>entrega amanhã</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F1F1',
    flex: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  textoTituloSecao: {
    color: '#666666',
    fontWeight: '700',
    fontSize: 18,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    width: '48%',
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
  starsContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  textValor: {
    fontWeight: '800',
    fontSize: 18,
    color: '#000000',
  },
  pix: {
    fontSize: 12,
  },
  textParcelado: {
    fontSize: 10,
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
    fontSize: 13,
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
  textEntrega: {
    backgroundColor: '#D6F7D9',
    color: '#457A10',
    fontWeight: '700',
    textAlign: 'center',
  },
  coracao: {
    position: 'absolute',
    top: 9,
    right: 9,
  },
  descontoValor: {
    fontSize: 12,
    color: 'white'
  },
});
