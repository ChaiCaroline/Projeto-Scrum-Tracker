package br.meuprojeto.scrum_tracker.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.meuprojeto.scrum_tracker.models.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    List<Usuario> findByEmail(String email);

    Usuario findByNome(String nome);

    @Query(value = "SELECT u.* FROM usuario u WHERE u.id NOT IN " +
            "(SELECT up.usuario_id FROM projeto_usuario up JOIN projeto p ON up.projeto_id = p.id WHERE p.nome = :nomeProjeto)", nativeQuery = true)
    List<Usuario> findUsuariosNaoAlocados(@Param("nomeProjeto") String nomeProjeto);
}
