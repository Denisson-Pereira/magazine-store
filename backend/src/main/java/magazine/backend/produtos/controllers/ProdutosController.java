package magazine.backend.produtos.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import magazine.backend.produtos.dtos.ProdutosDTO;
import magazine.backend.produtos.services.ProdutosService;

@RestController
@RequestMapping("produtos")
public class ProdutosController {
    
    @Autowired
    private ProdutosService produtosService;
    @Autowired

    @GetMapping("/itens")
    public List<ProdutosDTO> getAllProdutos() {
        return produtosService.getAll("produtos");
    }

    @GetMapping("/itens/{id}")
    public ProdutosDTO getByIdProdutos(@PathVariable int id) {
        return produtosService.getById("produtos", id);
    }
}