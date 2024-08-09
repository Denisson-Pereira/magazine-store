import React, { useEffect, useState } from 'react';
import { FaHeart, FaStar, FaArrowDown } from "react-icons/fa";
import './styles.sass';  
import { produtosService } from '../../services/produtosService';
import { IProdutos } from '../../models/IProdutos';
import { useFavorites } from '../../context/FavoritesContext';
import { useNavigate } from 'react-router-dom';
import { descontos } from '../../helpers/descontos';
import { parcerlar } from '../../helpers/parcerlar';
import NavBar from '../../components/NavBar';

export const Home = () => {
  const [dados, setDados] = useState<IProdutos[]>([]);
  const { favorites, toggleFavorite } = useFavorites();
  const [filteredProducts, setFilteredProducts] = useState({
    celulares: [],
    notebooks: [],
    tablets: []
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await produtosService();
        setDados(response);
        setFilteredProducts({
          celulares: response.filter((item: IProdutos) => item.categoria === 'celular'),
          notebooks: response.filter((item: IProdutos) => item.categoria === 'notebook'),
          tablets: response.filter((item: IProdutos) => item.categoria === 'tablet'),
        });
      } catch (error) {
        console.log('Erro ao consultar dados: ', error);
      }
    };
    fetchData();
  }, []);

  const renderStars = (rating: string) => {
    const numericRating = Math.min(5, Math.max(0, Math.round(parseFloat(rating))));
    const stars = Array(5).fill(null).map((_, i) => (
      <FaStar
        key={i}
        size={14}
        color={i < numericRating ? "#ffd700" : "#cccccc"}
      />
    ));
    return <div className="starsContainer">{stars}</div>;
  };

  const renderProductSection = (title, products) => (
    <div className="section">
      <h2 className="sectionTitle">{title}</h2>
      <div className="scrollableRow">
        {products.map((item) => {
          const isFavorite = favorites.some(fav => fav.id === item.id);
          return (
            <div
              key={item.id}
              className="item"
              onClick={() => navigate(`/ProdutosDetalhes/${item.id}`)} // Aqui está o redirecionamento para a página de detalhes
            >
              <img
                src={item.imagem1}
                alt={item.nome}
                className="image"
              />
              <div className="coracao" onClick={(e) => { e.stopPropagation(); toggleFavorite(item); }}>
                <FaHeart size={24} color={isFavorite ? 'red' : 'grey'} />
              </div>
              <p className="text">{item.nome}</p>
              {renderStars(item.avaliacao)}
              <div className="desconto">
                <p className="semDesconto">R$ {item.valor},00</p>
                <div className="containerDesconto">
                  <FaArrowDown color={'white'} />
                  <p className="descontoValor">15%</p>
                </div>
              </div>
              <p className="textValor">R$ {descontos(item.valor, 15)}</p>
              <p className="pix">No Pix</p>
              <p className="textParcelado">
                Ou de 10x de R$ {parcerlar(item.valor)} sem juros no cartão de crédito
              </p>
              <p className="textEntrega">Entrega amanhã</p>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div>
        <NavBar />
        <div className="container">
          {renderProductSection("📱 Os smartphones mais procurados!", filteredProducts.celulares)}
          {renderProductSection("💻 Notebooks mais procurados!", filteredProducts.notebooks)}
          {renderProductSection("📱 Tablets mais procurados!", filteredProducts.tablets)}
        </div>
    </div>
  );
};
