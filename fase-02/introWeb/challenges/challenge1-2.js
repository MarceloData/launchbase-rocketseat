/* Constituição e impressão de objetos */
const data = {
    name: 'Rocketseat',
    color: 'Roxo',
    focus: 'Programação',
    adress: [
        {
           street: 'Rua Guilherme Gembala',
           number: 260 
        }
    ]
}

console.log(`A empresa ${data.name} está localizada em ${data.adress[0].street},número ${data.adress[0].number}`)

/* Vetores e Objetos */

const object = {
    name: 'Carlos',
    age: 32,
    property: [
        { name: 'C++', speciality: 'Desktop' },
        { name: 'Python', speciality: 'Data Science' },
        { name: 'JavaScript', speciality: 'Web/Mobile' }
    ]
};

console.log(`O usuário ${object.name} tem ${object.age} anos e usa a tecnologia ${object.property[0].name} com especialidade em ${object.property[0].speciality}`)
