package magazine.backend.marcas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import magazine.backend.marcas.dtos.MarcasDTO;
import magazine.backend.marcas.services.MarcasService;

@RestController
@RequestMapping("marcas")
public class MarcasController {
    
    @Autowired
    private MarcasService marcasService;
    @Autowired

    @GetMapping("/itens")
    public List<MarcasDTO> getAllProdutos() {
        return marcasService.getAll("marcas");
    }

    @GetMapping("/itens/{id}")
    public MarcasDTO getByIdProdutos(@PathVariable int id) {
        return marcasService.getById("marcas", id);
    }
}