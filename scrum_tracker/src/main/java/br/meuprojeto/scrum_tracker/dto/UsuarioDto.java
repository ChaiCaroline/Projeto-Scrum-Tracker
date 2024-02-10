package br.meuprojeto.scrum_tracker.dto;

import java.util.List;

import br.meuprojeto.scrum_tracker.enums.RoleEnum;
import lombok.Getter;
import lombok.Setter;

public class UsuarioDto {
    @Getter
    @Setter
    private String nome;

    @Getter
    @Setter
    private String email;

    @Getter
    @Setter
    private RoleEnum role;

    @Getter
    @Setter
    private List<ProjetoDto> projetos;

    /*
     * public List<ProjetoDto> getProjetos() {
     * // Limitar a lista de projetos para mostrar apenas os 10 primeiros
     * if (projetos.size() > 1) {
     * return projetos.subList(0, 1);
     * } else {
     * return projetos;
     * }
     * }
     */

    public UsuarioDto(String nome, String email, RoleEnum role, List<ProjetoDto> projetos) {
        this.nome = nome;
        this.email = email;
        this.role = role;
        this.projetos = projetos;
    }

}
