package magazine.backend.auth.services;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import magazine.backend.auth.dtos.UsuarioDTO;
import magazine.backend.auth.dtos.UsuarioDadosLoginDTO;
import magazine.backend.conf.PasswordEnconderConfig;
import magazine.backend.infra.DataBaseConnection;


@Service
public class UsuarioLoginService {
    
    @Autowired
    private DataBaseConnection dataBaseConnection;

    @Autowired
    private PasswordEnconderConfig passwordEnconderConfig;

    public UsuarioDTO getUserLogin(UsuarioDadosLoginDTO usuario) throws HttpClientErrorException {
        String sql = "SELECT * FROM magazine_store.users WHERE login = ?";
        List<Map<String, Object>> result = dataBaseConnection.getConnectionUsuario().queryForList(sql, usuario.login());

        if (result.isEmpty()) {
            throw new HttpClientErrorException(HttpStatus.NOT_FOUND, "Usuário não encontrado!");
        }

        String senhaUsuarioNoBD = (String) result.get(0).get("senha");
        Boolean senhaValidada = passwordEnconderConfig.passwordEncoder().matches(usuario.senha(), senhaUsuarioNoBD);

        if (senhaValidada) {
            Timestamp createdAtTimestamp = (Timestamp) result.get(0).get("created_at");
            String createdAtString = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(createdAtTimestamp);

            return new UsuarioDTO(
                (Integer) result.get(0).get("id"),
                (String) result.get(0).get("nome"),
                (String) result.get(0).get("sobrenome"),
                (String) result.get(0).get("email"),
                (String) result.get(0).get("login"),
                (String) result.get(0).get("senha"),
                (String) result.get(0).get("foto"),
                (String) result.get(0).get("telefone"),
                (String) result.get(0).get("endereco"),
                (String) result.get(0).get("cidade"),
                (String) result.get(0).get("estado"),
                (String) result.get(0).get("tipo"),
                createdAtString // convertendo Timestamp para String
            );
        } else {
            throw new HttpClientErrorException(HttpStatus.NOT_FOUND, "Senha inválida!");
        }
    }
}