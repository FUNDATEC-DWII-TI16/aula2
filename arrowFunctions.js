function funcaoA(parametro) {
  console.log("Imprimindo parâmetro da function: " + parametro);
}

let funcaoAArrowFunction = parametro => {
  console.log("Imprimindo parâmetro da arrow function: " + parametro);
};

funcaoA("parametro da function");
funcaoAArrowFunction("parametro da arrow function");

//Arrow function em callback (funcoes parametro)

let meuArray = ["banana", "maçã", "laranja", "abacaxi"];

//Iterando por um array através de function de callback
meuArray.forEach(function(item) {
  console.log("Fruta da vez: " + item);
});

//Iterando por um array através de arrow function
meuArray.forEach(item => {
  console.log("Fruta da vez arrow function: " + item);
});
