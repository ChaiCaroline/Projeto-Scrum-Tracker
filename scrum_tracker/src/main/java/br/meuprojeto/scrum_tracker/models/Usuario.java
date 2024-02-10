package br.meuprojeto.scrum_tracker.models;

import java.util.List;

import br.meuprojeto.scrum_tracker.enums.RoleEnum;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Entity
@Data
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false)
    @NotBlank
    private String nome;

    @Column(nullable = false)
    @Email
    private String email;

    @Column(nullable = false)
    @Pattern(regexp = "^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$")
    private String senha;

    @Column(nullable = false)
    private RoleEnum role;

    @ManyToMany /* (mappedBy = "usuarios") */
    @JoinTable(name = "projeto_usuario", joinColumns = @JoinColumn(name = "usuario_id"), inverseJoinColumns = @JoinColumn(name = "projeto_id"))
    private List<Projeto> projetos;

    // Implementar Depois
    // @Getter
    // @Setter
    // @Column(nullable = false)
    // private String token;
}
