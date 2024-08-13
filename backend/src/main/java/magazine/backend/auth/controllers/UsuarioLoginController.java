package magazine.backend.auth.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import jakarta.validation.Valid;
import magazine.backend.auth.dtos.UsuarioDTO;
import magazine.backend.auth.dtos.UsuarioDadosLoginDTO;
import magazine.backend.auth.dtos.UsuarioRetornoLoginDTO;
import magazine.backend.auth.services.UsuarioLoginService;
import magazine.backend.infra.JWTTokenService;

@RestController
@RequestMapping("/login")
public class UsuarioLoginController {
    
    @Autowired
    private UsuarioLoginService usuarioLoginService;

    @Autowired
    private JWTTokenService jwtTokenService;

    @PostMapping
    public ResponseEntity<UsuarioRetornoLoginDTO> efetuarLogin(@RequestBody @Valid UsuarioDadosLoginDTO dados) throws Exception {
        UsuarioDTO usuario = usuarioLoginService.getUserLogin(dados);
        String token = jwtTokenService.gerarToken(usuario);
        UsuarioRetornoLoginDTO usuarioRetorno = new UsuarioRetornoLoginDTO(usuario, token);
        return ResponseEntity.ok().body(usuarioRetorno);
    }
}