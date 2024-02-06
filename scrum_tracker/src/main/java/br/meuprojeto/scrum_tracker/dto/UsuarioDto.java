package br.meuprojeto.scrum_tracker.dto;

import br.meuprojeto.scrum_tracker.enums.RoleEnum;
import lombok.Getter;
import lombok.Setter;

public class UsuarioDto {
    @Getter
    @Setter
    private String nome;

    @Getter
    @Setter
    private RoleEnum role;

    public UsuarioDto(String nome, RoleEnum role) {
        this.nome = nome;
        this.role = role;
    }

}
