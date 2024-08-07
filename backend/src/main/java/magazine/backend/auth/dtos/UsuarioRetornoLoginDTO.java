package magazine.backend.auth.dtos;

public record UsuarioRetornoLoginDTO(
    UsuarioDTO usuario,
    String token
) {}