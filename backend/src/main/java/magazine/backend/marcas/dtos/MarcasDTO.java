package magazine.backend.marcas.dtos;

public record MarcasDTO(
    Integer id,
    String nome, 
    String avaliacao,
    String imagem,
    String quantidade
){}