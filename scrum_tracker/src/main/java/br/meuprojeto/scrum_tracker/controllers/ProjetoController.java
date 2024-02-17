package br.meuprojeto.scrum_tracker.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.meuprojeto.scrum_tracker.dto.UsuarioAoProjetoDto;
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

    @SuppressWarnings({ "unchecked", "rawtypes" })
    @PostMapping
    public ResponseEntity<String> cadastrarProjeto(@RequestBody @Valid Projeto projeto,
            @RequestHeader("usuario") String usuarioNome) {
        Projeto projetoCriado = projetoRepository.save(projeto);

        // Verifica se o projeto foi criado com sucesso
        if (projetoCriado != null) {
            // Encontra o usuário pelo nome
            Usuario usuario = usuarioRepository.findByNome(usuarioNome);

            // Verifica se o usuário foi encontrado
            if (usuario != null) {
                // Adiciona o usuário ao projeto
                projetoCriado.getUsuarios().add(usuario);
                projetoRepository.save(projetoCriado);
            } else {
                // Lida com o caso em que o usuário não foi encontrado
                return new ResponseEntity("Usuário não encontrado", HttpStatus.NOT_FOUND);
            }
        } else {
            // Lida com o caso em que o projeto não foi criado corretamente
            return new ResponseEntity("Erro ao criar o projeto", HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<String>("Projeto Criado com Sucesso", HttpStatus.CREATED);
    }

    @PostMapping("/adicionarUsuario")
    public ResponseEntity<?> adicionarUsuario(@RequestBody UsuarioAoProjetoDto usuariosEProjeto) {

        Projeto projeto = projetoRepository.findByNome(usuariosEProjeto.getProjeto());

        if (projeto == null) {
            return ResponseEntity.badRequest().body("Projeto não encontrado");
        }

        for (String usuarioNome : usuariosEProjeto.getUsuarios()) {
            Usuario usuario = usuarioRepository.findByNome(usuarioNome);

            if (usuario == null) {
                return ResponseEntity.badRequest().body("Usuário não encontrado: " + usuarioNome);
            }

            if (projeto.getUsuarios().contains(usuario)) {
                return ResponseEntity.badRequest().body("Usuário já está associado ao projeto: " + usuarioNome);
            }

            projeto.getUsuarios().add(usuario);
        }

        projetoRepository.save(projeto);
        return ResponseEntity.ok().body("Usuários adicionados ao projeto com sucesso");
    }

}
