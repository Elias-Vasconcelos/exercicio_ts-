function CalculaValores( Valor1: number, Valor2: number){
    return  Valor1 * Valor2;
}

function Saudação( Nome: string ){
    return console.log (` Olá ${Nome} `)
}

const Mutiplicação = CalculaValores(10, 50)
const Elias = Saudação('Elias')

console.log(Mutiplicação)
console.log(Elias)