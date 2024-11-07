let saldo = getWin(90,5)
let nivel = verificacao(saldo)

console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`)

function getWin(vitoria, derrota){
    let resultado = (vitoria - derrota)
    return resultado

}
function verificacao(classe){
    let classificacao
    if (classe == 10){
        classificacao = 'Ferro' 
    }
    else if(( classe >= 11) && (saldo <= 20)){
        classificacao = 'Bronze' 
    }
    else if((classe >= 21) && (saldo <= 50)){
        classificacao = 'Prata' 
    }
    else if((classe >= 51) && (saldo <= 80)){
        classificacao = 'Ouro' 
    }
    else if((classe >= 81) && (saldo <= 90)){
        classificacao = 'Diamante' 
    }
    else if((classe >= 91) && (saldo <= 100)){
        classificacao = 'Lendário' 
    }
    else if(classe >= 101 ){
        classificacao = 'Imortal' 
    }
    return classificacao
}
