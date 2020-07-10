/* Cálculo de IMC  */
const name = "Carlos"
const mass = 84
const heigth = 1.88

var imc = mass/(heigth*heigth)

if (imc >= 30) {
    console.log('Carlos está acima do peso!')
} else {
    console.log('Carlos não está acima do peso!')
}

/* Cálculo de Aposentadoria */

const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

if (sexo == 'F' && contribuicao >= 30 && (idade+contribuicao) == 85 ) {
    console.log(`${nome}, você pode se aposentar!`)
} else if (sexo == 'M' && contribuicao >=35 && (idade+contribuicao)==95 ) {
    console.log(`${nome},você pode se aposentar!`)
} else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
}
