let valor; // não inicializada

console.log(valor);
console.log(valor2); // is not defined

valor = null; // ausencia de valor
console.log(valor);
console.log(valor.toString()); // cannot read property 'toString' of null

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // evite atribuir undefined
console.log(!!produto.preco);
delete produto.preco;
console.log(produto);

produto.preco = null; // sem preço
console.log(!!produto.preco);
console.log(produto);