package magazine.backend.auth.services;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import magazine.backend.auth.dtos.UsuarioDadosCadastroDTO;
import magazine.backend.conf.PasswordEnconderConfig;
import magazine.backend.infra.DataBaseConnection;
import magazine.backend.infra.VerificarDadosExistentesUsuario;

@Service
public class UsuarioCadastroService {

    @Autowired
    private DataBaseConnection dataBaseConnection;

    @Autowired
    private PasswordEnconderConfig passwordEnconderConfig;

    @Autowired
    private VerificarDadosExistentesUsuario verificarDadosExistentesUsuario;

    public Integer cadastrarUsuario(UsuarioDadosCadastroDTO usuario) throws HttpClientErrorException, SQLException {

        Boolean verificarDados = verificarDadosExistentesUsuario.verificador(usuario);

        if (verificarDados) {

            String sqlUsuario = "INSERT INTO users (nome, sobrenome, email, login, senha, foto, telefone, endereco, cidade, estado, tipo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

            String senhaBcrypt = passwordEnconderConfig.passwordEncoder().encode(usuario.senha());

            int novoUsuario = dataBaseConnection.getConnectionUsuario().update(sqlUsuario,
                    usuario.nome(), usuario.sobrenome(), usuario.email(),
                    usuario.login(), senhaBcrypt, usuario.foto(),
                    usuario.telefone(), usuario.endereco(), usuario.cidade(),
                    usuario.estado(), usuario.tipo());

            if (novoUsuario == 1) {
                return novoUsuario;
            }

            throw new HttpClientErrorException(HttpStatus.BAD_REQUEST, "Erro ao realizar cadastro!");
        }

        return 0;
    }
}