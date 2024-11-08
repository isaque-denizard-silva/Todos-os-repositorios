let p = document.querySelector('p')
let produto={nome'Pera',preço:20,quantidade:4}
produto.desconto=9;
function calcularTotal(produto){
    return (produto.quantidade * produto.preço) * (1-(produto.desconto/100);]};
p.innerText = 