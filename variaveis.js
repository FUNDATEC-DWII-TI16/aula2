//var = variável global
var global = "Node é show de bola";

global = "Node é super show de bola";

console.log(global);

//let = variável com escopo definido
function funcaoA() {
  let comEscopo = "não existo fora da funcaoA";
  console.log(comEscopo);
}
try {
  console.log(comEscopo);
} catch (err) {
  console.log("Usou onde não pode");
}
