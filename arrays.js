let array = ["A", "B", "C", "D", "E"];

//percorrendo um array com programação funcional (arrow function)
array.forEach(letra => {
  console.log(letra);
});

//Filtrando um array para buscar elementos a partir da letra 'D'
let letrasAPartirDoD = array.filter(letra => {
  return letra >= "D";
});
console.log(letrasAPartirDoD);

//Arrays podem conter objetos!
let arrayDeObjetos = [
  {
    nome: "Fulano",
    idade: 15
  },
  {
    nome: "Ciclano",
    idade: 20
  },
  {
    nome: "Beltrano",
    idade: 21
  },
  {
    nome: "Joana",
    idade: 80
  }
];

//Filtrando arrays de objetos, apenas idade menor igual a 20
let pessoasCom20AnosOuMenos = arrayDeObjetos.filter(pessoa => {
  return pessoa.idade <= 20;
});
console.log(pessoasCom20AnosOuMenos);

//Buscando um único elemento do array por uma condição
let pessoaJoana = arrayDeObjetos.find(pessoa => {
  return pessoa.nome === "Joana";
});
console.log(pessoaJoana);
