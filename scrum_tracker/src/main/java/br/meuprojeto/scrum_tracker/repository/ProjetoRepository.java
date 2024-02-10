package br.meuprojeto.scrum_tracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.meuprojeto.scrum_tracker.models.Projeto;

//import java.util.List;

public interface ProjetoRepository extends JpaRepository<Projeto, Integer> {
    // List<Projeto> findById(Integer id);
}