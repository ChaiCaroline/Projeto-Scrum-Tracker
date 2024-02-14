package br.meuprojeto.scrum_tracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.meuprojeto.scrum_tracker.models.Projeto;

public interface ProjetoRepository extends JpaRepository<Projeto, Integer> {
    Projeto findByNome(String nome);
}