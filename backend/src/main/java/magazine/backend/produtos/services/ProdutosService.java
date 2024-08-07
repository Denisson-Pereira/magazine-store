package magazine.backend.produtos.services;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;
import magazine.backend.infra.DataBaseConnection;
import magazine.backend.produtos.dtos.ProdutosDTO;


@Service
public class ProdutosService implements GenericoService<ProdutosDTO> {

    @Autowired
    private DataBaseConnection dataBaseConnection;

    @Override
    public List<ProdutosDTO> getAll(String tableName) {
        String sql = String.format("SELECT * FROM %s", tableName);
        return dataBaseConnection.getConnectionUsuario().query(sql, new CelularesRowMapper());
    }

    @SuppressWarnings("deprecation")
    @Override
    public ProdutosDTO getById(String tableName, int id) {
        String sql = String.format("SELECT * FROM %s WHERE id = ?", tableName);
        return dataBaseConnection.getConnectionUsuario().queryForObject(sql, new Object[] { id },
                new CelularesRowMapper());
    }

    private static class CelularesRowMapper implements RowMapper<ProdutosDTO> {
        @Override
        public ProdutosDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
            return new ProdutosDTO(
                    rs.getInt("id"),
                    rs.getString("nome"),
                    rs.getString("valor"),
                    rs.getString("quantidade"),
                    rs.getString("marca"),
                    rs.getString("sistema"),
                    rs.getString("armazenamento"),
                    rs.getString("tela"),
                    rs.getString("modelo"),
                    rs.getString("sobre"),
                    rs.getString("avaliacao"),
                    rs.getString("ram"),
                    rs.getString("imagem1"),
                    rs.getString("imagem2"),
                    rs.getString("imagem3"),
                    rs.getString("loja1"),
                    rs.getString("loja2"),
                    rs.getString("loja3"),
                    rs.getString("categoria"));
        }
    }
}