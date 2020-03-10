let objetoVazio = {};
console.log(objetoVazio);

let pessoa = {
  nome: "Epaminondas de Souza",
  idade: 25
};
console.log(pessoa);

console.log("O nome da pessoa é " + pessoa.nome);
console.log(`O nome da pessoa é ${pessoa.nome}`);

pessoa.nome = "José de Souza";
console.log(`O nome da pessoa agora é ${pessoa.nome}`);

let pessoaQueCumprimenta = {
  nome: "André Vieira",
  dizerOi() {
    console.log(`Oi, meu nome é ${this.nome}`);
  }
};
pessoaQueCumprimenta.dizerOi();
