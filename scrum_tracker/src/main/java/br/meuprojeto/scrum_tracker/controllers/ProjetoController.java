package br.meuprojeto.scrum_tracker.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.meuprojeto.scrum_tracker.models.Projeto;
import br.meuprojeto.scrum_tracker.models.Usuario;
import br.meuprojeto.scrum_tracker.repository.ProjetoRepository;
import br.meuprojeto.scrum_tracker.repository.UsuarioRepository;
import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/scrum")
public class ProjetoController {

    @Autowired
    private ProjetoRepository projetoRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping
    public ResponseEntity<Projeto> cadastrarProjeto(@RequestBody @Valid Projeto projeto) {
        projetoRepository.save(projeto);
        return new ResponseEntity<Projeto>(HttpStatus.CREATED);
    }

    @PostMapping("/adicionarUsuario")
    public ResponseEntity<Usuario> AdicionarUsuario(@RequestHeader("projeto") Integer projetoId,
            @RequestHeader("usuario") Integer usuarioId) {
        Projeto projetoAtual = projetoRepository.findById(projetoId).get();
        Boolean usuarioExiste = usuarioRepository.existsById(usuarioId);

        if (usuarioExiste) {
            Optional<Usuario> usuarioPesquisado = usuarioRepository.findById(usuarioId);
            projetoAtual.getUsuarios().add(usuarioPesquisado.get());

            projetoRepository.save(projetoAtual);

            return new ResponseEntity<Usuario>(HttpStatus.ACCEPTED);
        }

        return new ResponseEntity<Usuario>(HttpStatus.BAD_REQUEST);

    }
}
