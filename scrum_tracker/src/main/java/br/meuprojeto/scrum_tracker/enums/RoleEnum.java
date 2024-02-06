package br.meuprojeto.scrum_tracker.enums;

public enum RoleEnum {

    ADMIN("Administrador"),
    PO("Product Owner"),
    SM("Scrum Master"),
    DEV("Desenvolvedor");

    private String descricao;

    RoleEnum(String descricao) {
        this.descricao = descricao;
    }

    public String getDescricao() {
        return descricao;
    }
}
