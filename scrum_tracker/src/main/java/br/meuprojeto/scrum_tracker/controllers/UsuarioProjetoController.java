package br.meuprojeto.scrum_tracker.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.meuprojeto.scrum_tracker.models.Projeto;
import br.meuprojeto.scrum_tracker.models.Usuario;
import br.meuprojeto.scrum_tracker.repository.ProjetoRepository;
import br.meuprojeto.scrum_tracker.repository.UsuarioRepository;

@RestController
@RequestMapping("/projeto")
public class UsuarioProjetoController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ProjetoRepository projetoRepository;

    @PostMapping("/usuario")
    public String adicionarUsuarioAoProjeto(@RequestHeader("usuario") Integer usuarioId,
            @RequestHeader("projeto") Integer projetoId) {
        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new IllegalArgumentException("Usuário não encontrado com o ID fornecido"));

        Projeto projeto = projetoRepository.findById(projetoId)
                .orElseThrow(() -> new IllegalArgumentException("Projeto não encontrado com o ID fornecido"));

        projeto.getUsuarios().add(usuario);
        projetoRepository.save(projeto);

        return "Usuário adicionado ao projeto com sucesso";
    }
}
