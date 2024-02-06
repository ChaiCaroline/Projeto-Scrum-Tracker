package br.meuprojeto.scrum_tracker.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.meuprojeto.scrum_tracker.models.Projeto;
import br.meuprojeto.scrum_tracker.repository.ProjetoRepository;
import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/scrum")
public class ProjetoController {

    @Autowired
    private ProjetoRepository projetoRepository;

    @PostMapping
    public ResponseEntity<Projeto> cadastrarProjeto(@RequestBody @Valid Projeto projeto) {
        projetoRepository.save(projeto);
        return new ResponseEntity<Projeto>(HttpStatus.CREATED);
    }
}
