/* Usuários e tecnologies */

const users1 = [
  { name: "Carlos", tecnologies: ["HTML", "CSS"] },
  { name: "Jasmine", tecnologies: ["JavaScript", "CSS"] },
  { name: "Tuane", tecnologies: ["HTML", "Node.js"] },
];
 
// Primeira Opção
for (let i = 0; i<users1.length; i++) {
    console.log(`${users1[i].name} trabalha com ${users1[i].tecnologies[0]}, ${users1[i].tecnologies[1]}`)
}

//Segunda opção
for (let user of users1) {
    console.log(`${user.name} trabalha com ${user.tecnologies[0]}, ${user.tecnologies[1]}`)
}

//Terceira Opção 
var i = 0
do {
    console.log(`${users1[i].name} trabalha com ${users1[i].tecnologies[0]}, ${users1[i].tecnologies[1]}`)
    i++
} while (i>0 && i<users1.length)

//Quarta opção
var i = 0
while (i<users1.length) {
    console.log(`${users1[i].name} trabalha com ${users1[i].tecnologies[0]}, ${users1[i].tecnologies[1]}`)
    i++
}

/* Busca por tecnologia */

function workWithCSS (user) {
    for (let tec of user.tecnologies){
       if (tec == 'CSS') {
           return true
        } 
    }
    return false
}

for (let i = 0; i < users1.length; i++) {
    console.log(workWithCSS(users1[i]));
  const userWorkCSS = workWithCSS(users1[i]);

  if (userWorkCSS) {
    console.log(`O usuário ${users1[i].name} trabalha com CSS`);
  }
}

/* Soma de costs e revenue */

const users2 = [
  {
    name: "Salvio",
    revenue: [115.3, 48.7, 98.3, 14.5],
    costs: [85.3, 13.5, 19.9],
  },
  {
    name: "Marcio",
    revenue: [24.6, 214.3, 45.3],
    costs: [185.3, 12.1, 120.0],
  },
  {
    name: "Lucia",
    revenue: [9.8, 120.3, 340.2, 45.3],
    costs: [450.2, 29.9],
  },
];

function addNumbers(array) {
    let result = 0
    for (let number of array) {
        result = result + number
    }
    return result
}

function balance(revenue, costs) {
    let rev = addNumbers(revenue)
    let cost = addNumbers(costs)
    let balance = rev - cost
    return balance
}

function result(users) {
    for (let user of users) {
        let bal = balance(user.revenue, user.costs) 
        if (bal > 0) {
            console.log(`${user.name} possui saldo positivo de ${bal}`)
        } else if (bal == 0) {
            console.log(`${user.name} não possui saldo`)
        } else {
            console.log(`${user.name} possui saldo negativo de ${bal}`)
        }
    }
}

result(users2)