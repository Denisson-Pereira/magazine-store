package magazine.backend.auth.dtos;

public record UsuarioDTO(
    Integer id,
    String nome,
    String sobrenome,
    String email,
    String login,
    String senha,
    String foto,
    String telefone,
    String endereco,
    String cidade,
    String estado,
    String tipo,
    String created_at
) {}