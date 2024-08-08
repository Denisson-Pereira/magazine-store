import { RouteProp } from '@react-navigation/native';

// Defina os tipos das rotas
type RootStackParamList = {
  Produtos: undefined;
  ProdutosDetalhes: { id: number };
};

// Defina o tipo do `route` para a tela `ProdutosDetalhes`
type ProdutosDetalhesRouteProp = RouteProp<RootStackParamList, 'ProdutosDetalhes'>;

export { RootStackParamList, ProdutosDetalhesRouteProp };