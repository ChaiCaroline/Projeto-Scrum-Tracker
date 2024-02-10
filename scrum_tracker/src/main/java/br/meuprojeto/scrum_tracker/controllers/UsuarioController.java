package br.meuprojeto.scrum_tracker.controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.meuprojeto.scrum_tracker.dto.ProjetoDto;
import br.meuprojeto.scrum_tracker.dto.UsuarioDto;
import br.meuprojeto.scrum_tracker.models.Usuario;
import br.meuprojeto.scrum_tracker.repository.UsuarioRepository;
import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/login")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping
    public ResponseEntity<UsuarioDto> listarUsuario(@RequestHeader("email") String email) {
        Usuario usuarioLogado = usuarioRepository.findByEmail(email).get(0);

        // Convertendo os projetos para ProjetoDto
        List<ProjetoDto> projetosDto = usuarioLogado.getProjetos().stream()
                .map(projeto -> new ProjetoDto(projeto.getNome(), projeto.getCliente(), projeto.getDescricao(),
                        projeto.getVisao()))
                .collect(Collectors.toList());

        UsuarioDto usuario = new UsuarioDto(usuarioLogado.getNome(), email, usuarioLogado.getRole(), projetosDto);

        return new ResponseEntity<>(usuario, HttpStatus.ACCEPTED);
    }

    @PostMapping
    public ResponseEntity<Usuario> cadastrarUsuario(@RequestBody @Valid Usuario usuario) {
        Usuario novUsuario = usuarioRepository.save(usuario);
        return new ResponseEntity<Usuario>(novUsuario, HttpStatus.CREATED);
    }

}
