class produtos {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

exibirinfo = (produto) => {
    return `O produto: ${produto.nome} R$${produto.preco}`;
}

const sintaralho = new produtos("Sintaralho", 80);
const pokemon = new produtos("pikachu", 55);
console.log(exibirinfo(sintaralho));
console.log(exibirinfo(pokemon));

class carrinho {
    constructor() {
        this.itens = [];
    }

    adicionarProduto(produto) {
        this.itens.push(produto);
    }

    calcularTotal() {
        return this.itens.reduce((total, produto) => total + produto.preco, 0);
    }
}

const meuCarrinho = new carrinho();
meuCarrinho.adicionarProduto(sintaralho);
meuCarrinho.adicionarProduto(pokemon);
console.log(`Total do carrinho: R$${meuCarrinho.calcularTotal()}`);

