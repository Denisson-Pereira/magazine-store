package magazine.backend.infra;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.client.HttpClientErrorException;
import magazine.backend.auth.dtos.UsuarioDadosCadastroDTO;

@Component
public class VerificarDadosExistentesUsuario {
    
    @Autowired
    private DataBaseConnection dataBaseConnection;

    public Boolean verificador(UsuarioDadosCadastroDTO usuario) throws HttpClientErrorException{
        String sqlEmail = "SELECT id from magazine_shop.users where email = ?";
        List<Map<String, Object>> usuarioPorEmail = dataBaseConnection.getConnectionUsuario().queryForList(sqlEmail, usuario.email());

        if(!usuarioPorEmail.isEmpty()) {
            throw new HttpClientErrorException(HttpStatus.BAD_REQUEST, "E-mail já cadastrado!");
        }

        String sqlLogin = "SELECT id from magazine_shop.users where login = ?";
        List<Map<String, Object>> usuarioPorLogin = dataBaseConnection.getConnectionUsuario().queryForList(sqlLogin, usuario.login());

        if(!usuarioPorLogin.isEmpty()) {
            throw new HttpClientErrorException(HttpStatus.BAD_REQUEST, "Login já cadastrado!");
        }

        return true;
    }
}