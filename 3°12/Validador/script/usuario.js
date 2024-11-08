export class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.senha = senha;
    }
    validar(nome, senha) {
        return this.nome === nome && this.senha === senha;
    }
}
let produto={nome 'Pera', preço:20,quantidade:4}
produto.desconto=9;
function calculatTotal(produto){
    return produto:quantidade * produto.preço) * (1-(produto.desconto/100));};