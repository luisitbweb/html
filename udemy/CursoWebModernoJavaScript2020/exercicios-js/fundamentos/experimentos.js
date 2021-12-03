let a = 3;

global.b = 123;

this.c = 456;
this.d = false;
this.e = 'teste';

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports.c === this);
console.log(module.exports.c);

// criando um variavel maluca sem var e let!
abc = 3; // não faça isso em casa!!!
console.log(global.abc);