import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IProdutos } from '../../models/IProdutos';
import { produtosIDService } from '../../services/produtosIDService';
import { FaHeart, FaStar, FaShoppingBag, FaStoreAlt, FaArrowDown } from "react-icons/fa";
import './styles.sass';  
import { useCart } from '../../context/CartContext';
import { descontos } from '../../helpers/descontos';
import { parcerlar } from '../../helpers/parcerlar';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [produto, setProduto] = useState<IProdutos | null>(null);
  const { addCart } = useCart();

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await produtosIDService(id!);
        setProduto(response);
      } catch (error) {
        console.log('Erro ao consultar dados: ', error);
      }
    };
    fetchProduto();
  }, [id]);

  const renderStars = (rating: string) => {
    const numericRating = Math.min(5, Math.max(0, Math.round(parseFloat(rating))));
    const stars = Array(5).fill(null).map((_, i) => (
      <FaStar
        key={i}
        size={15}
        color={i < numericRating ? "#ffd700" : "#cccccc"}
      />
    ));
    return <div className="starsContainer">{stars}</div>;
  };

  const handleAddToCart = () => {
    if (produto) {
      addCart(produto);
      alert('Produto adicionado ao carrinho!');
    }
  };

  if (!produto) return <p>Carregando...</p>;

  return (
    <div className="container">
      <div className="imagesContainer">
        <img src={produto.imagem1} alt={produto.nome} className="image" />
        <img src={produto.imagem2} alt={produto.nome} className="image" />
        <img src={produto.imagem3} alt={produto.nome} className="image" />
      </div>
      <div className="detailsContainer">
        <div className="indica">
          <span>Magazine Shop indica</span>
          <FaHeart size={15} color={'white'} />
        </div>
        <h1 className="productName">{produto.nome}</h1>
        <div className="ratingContainer">
          {renderStars(produto.avaliacao)}
          <span>{produto.avaliacao}</span>
        </div>
        <p className="vendido">Vendido e entregue por <strong>Magazine Shop</strong></p>
        <div className="descontoContainer">
          <p className="semDesconto">R$ {produto.valor},00</p>
          <div className="descontoTag">
            <FaArrowDown color={'white'} />
            <span>15%</span>
          </div>
        </div>
        <p className="precoFinal">R$ {descontos(produto.valor, 15)}</p>
        <p className="pix">No Pix</p>
        <p className="parcelamento">Ou de 10x de R$ {parcerlar(produto.valor)} sem juros no cartão de crédito</p>
        <div className="buttonsContainer">
          <button className="btnCarrinho" onClick={handleAddToCart}>
            <FaShoppingBag size={20} />
            Adicionar ao carrinho
          </button>
          <button className="btnLoja">
            <FaStoreAlt size={20} />
            Retire na loja grátis
          </button>
        </div>
        <div className="descricaoContainer">
          <h2>Descrição e ficha técnica</h2>
          <p>Código: 23798546513{produto.id}</p>
          <div className="detailsList">
            <div className="detailRow">
              <span className="label">Marca:</span>
              <span className="value">{produto.marca}</span>
            </div>
            <div className="detailRow">
              <span className="label">Quantidade:</span>
              <span className="value">{produto.quantidade}</span>
            </div>
            <div className="detailRow">
              <span className="label">Modelo:</span>
              <span className="value">{produto.modelo}</span>
            </div>
            <div className="detailRow">
              <span className="label">Sobre:</span>
              <span className="value">{produto.sobre}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
