//Constante não muda de valor durante a execução
const name= "marcelo";

//String template - pode-se colocar uma variável dentro das crases
const nome1 = `nayara e ${nome}`;

//Impressão no console
console.log(nome1);

//Tipos
console.log(typeof nome);

//Operadores de comparação:
console.log(5 >= 4);

//Condicional
if (5 >= 4) {
  console.log("ok");
}

//Objeto
const aluno = {
  nome: "Marcelo",
  nota: 10,
};
console.log(aluno.nome);

//Arrays
const students = [
  {
    nome: "Marcelo",
    nota: 9,
  },
  {
    nome: "Pedro",
    nota: 8,
  },
];
console.log(students);
console.log(students[1].nota);

const nomesDestudents = ["João", "Maria"];
console.log(nomesDestudents);

console.table(students);
