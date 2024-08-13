package magazine.backend.produtos.services;

import java.util.List;

public interface GenericoService<T> {
    List<T> getAll(String tableName);
    T getById(String tabString, int id);
}