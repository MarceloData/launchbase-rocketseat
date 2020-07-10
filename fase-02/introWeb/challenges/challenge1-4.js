/* Intro */

const user = {
  name: "Mariana",
  transactions: [],
  balance: 0,
};

/* Adicionar Transações */

function createTransaction(user,transaction) {
    user.transactions.push(transaction);
    if (transaction.type == 'credit'){
        user.balance += transaction.value;
    } else {
        user.balance -= transaction.value;
    }
}

/* Relatórios */

function getHigherTransactionByType(user, type) {
    let value = 0
    let result = {}
    for (let transac of user.transactions) {
        if (transac.type == type && transac.value > value) {
            value = transac.value
            result = transac 
        }
    }
    console.log(result)
}

function getAverageTransactionValue(user) {
    let result = 0
    for (let transac of user.transactions) {
        result = result + transac.value
    }
    console.log(result/user.transactions.length)
}

function getTransactionsCount(user) {
    var credit = 0
    var debit = 0
    for (let transac of user.transactions) {
        if (transac.type == 'credit') {
            credit++
        } else {
            debit++
        }
    }
    var result = {
        credit: credit,
        debit : debit
    }
    console.log(result)
}

createTransaction(user, { type: "credit", value: 50 });
createTransaction(user, { type: "credit", value: 120 });
createTransaction(user, { type: "debit", value: 80 });
createTransaction(user, { type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType(user, "credit") // { type: 'credit', value: 120 }
getHigherTransactionByType(user, "debit") // { type: 'debit', value: 80 }

getAverageTransactionValue(user) // 70

getTransactionsCount(user) // { credit: 2, debit: 2 }

