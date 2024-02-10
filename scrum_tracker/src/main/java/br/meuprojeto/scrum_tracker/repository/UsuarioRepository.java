package br.meuprojeto.scrum_tracker.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import br.meuprojeto.scrum_tracker.models.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    List<Usuario> findByEmail(String email);
}
