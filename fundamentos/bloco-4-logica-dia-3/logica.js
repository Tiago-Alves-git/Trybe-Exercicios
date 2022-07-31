let soma = 0 ;

for (let index = 1 ; index <= 50 ; index += 1) {
    soma += index ;
}

console.log('O resultado da soma é : '+ soma)

let quantidade = 0 ;

for (let index = 2 ; index <= 150 ; index +=1){
    if (index % 3 === 0)
    quantidade += 1
}
if (quantidade === 50){
    console.log ('Mensagem Secreta')
}
else {
    console.log('Quantidade de numeros divisiveis: ' + quantidade)
}
