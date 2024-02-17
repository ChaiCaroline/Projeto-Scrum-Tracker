package br.meuprojeto.scrum_tracker.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

public class UsuarioAoProjetoDto {
    @Getter
    @Setter
    private String projeto;

    @Getter
    @Setter
    private List<String> usuarios;

    public UsuarioAoProjetoDto(String projeto, List<String> usuarios) {
        this.projeto = projeto;
        this.usuarios = usuarios;
    }
}
