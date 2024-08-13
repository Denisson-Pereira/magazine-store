package magazine.backend.produtos.dtos;

public record ProdutosDTO(
    Integer id,
    String nome,
    String valor, 
    String quantidade, 
    String marca,
    String sistema, 
    String armazenamento, 
    String tela, 
    String modelo, 
    String sobre, 
    String avaliacao,
    String ram, 
    String imagem1, 
    String imagem2, 
    String imagem3, 
    String loja1, 
    String loja2, 
    String loja3,
    String categoria
){}