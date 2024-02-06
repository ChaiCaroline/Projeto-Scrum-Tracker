package br.meuprojeto.scrum_tracker.repository;

import java.util.List;

//import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import br.meuprojeto.scrum_tracker.models.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario, Integer> {
    List<Usuario> findByEmail(String email);
}
