package magazine.backend.marcas.services;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;
import magazine.backend.infra.DataBaseConnection;
import magazine.backend.marcas.dtos.MarcasDTO;


@Service
public class MarcasService implements GenericoService<MarcasDTO> {

    @Autowired
    private DataBaseConnection dataBaseConnection;

    @Override
    public List<MarcasDTO> getAll(String tableName) {
        String sql = String.format("SELECT * FROM %s", tableName);
        return dataBaseConnection.getConnectionUsuario().query(sql, new MarcasRowMapper());
    }

    @SuppressWarnings("deprecation")
    @Override
    public MarcasDTO getById(String tableName, int id) {
        String sql = String.format("SELECT * FROM %s WHERE id = ?", tableName);
        return dataBaseConnection.getConnectionUsuario().queryForObject(sql, new Object[] { id },
                new MarcasRowMapper());
    }

    private static class MarcasRowMapper implements RowMapper<MarcasDTO> {
        @Override
        public MarcasDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
            return new MarcasDTO(
                    rs.getInt("id"),
                    rs.getString("nome"),
                    rs.getString("avaliacao"),
                    rs.getString("imagem"),
                    rs.getString("quantidade")
            );
        }
    }
}