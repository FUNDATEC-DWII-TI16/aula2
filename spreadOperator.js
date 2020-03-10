//Spread operator para objetos: abre os atributos do objeto
let objeto1 = {
  nome: "Ciclano",
  sobreNome: "Farias"
};

let objeto2 = {
  sobreNome: "Souza",
  idade: 20
};

let mergeObjeto1Objeto2 = {
  ...objeto1,
  ...objeto2
};

console.log(mergeObjeto1Objeto2);

//Spread operator para arrays: abre os elementos do array
let array1 = ["A", "B", "C"];

let array2 = ["C", "D", "E"];

let mergeArray1Array2 = [...array1, ...array2];

console.log(mergeArray1Array2);
