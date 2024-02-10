package br.meuprojeto.scrum_tracker.dto;

import lombok.Getter;
import lombok.Setter;

public class ProjetoDto {
    @Getter
    @Setter
    private String nome;

    @Getter
    @Setter
    private String clinte;

    @Getter
    @Setter
    private String descricao;

    @Getter
    @Setter
    private String visao;

    public ProjetoDto(String nome, String clinte, String descricao, String visao) {
        this.nome = nome;
        this.clinte = clinte;
        this.descricao = descricao;
        this.visao = visao;
    }
}
