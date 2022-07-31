// let numbers = [30,20,10,9,70,80,23,40,54,43,92]

// for (let index = 0 ; index < numbers.length ; index += 1) {
//     console.log(numbers[index])
    
// } exercicio 1 -------------------------------------------
 

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let soma = 0 

// for (let index = 0 ; index < numbers.length ; index += 1){
//     soma += numbers[index];
    
// }

// console.log(soma) exercicio 2 --------------------------

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let soma = 0 

// for (let index = 0 ; index < numbers.length ; index += 1){
//     soma += numbers[index];
    
// }

// console.log(soma / numbers.length) exercicio 3 ----------



// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let soma = 0 

// for (let index = 0 ; index < numbers.length ; index += 1){
//     soma += numbers[index];
    
// }
// if ( soma / numbers.length > 20 ) {
//     console.log('Valor maior que 20')
// }

// else if ( soma / numbers.length < 20) {
//     console.log('Valor menor que 20')
// }
 
// console.log(soma / numbers.length) 

// exercicio 4 ------------^^^^^

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maiorNumero = 0;

// for (let index = 0 ; index < numbers.length ; index += 1) { 
//     if (numbers[index] > maiorNumero) {
//         maiorNumero = numbers[index];
//     }
// }
// console.log(maiorNumero)

// exercicio 5 ^^^^^^^^^^^^^^^^^^^^^^


// let numbers = [6, 8, 4, 10, 70, 8, 100, 2, 32, 28];
// let numerosImpares = 0;

// for (let index = 0 ; index < numbers.length ; index += 1) {
//     if (numbers[index] % 2 != 0 ) {
//         numerosImpares += 1
//     }
// }

// if (numerosImpares === 0) {
//     console.log('Nenhum numero impar')
// }

// else {
//     console.log(numerosImpares)
// }

// exercicio 6 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let menorNumero = 1000;

// for (let index = 0 ; index < numbers.length ; index += 1) { 
//     if (numbers[index] < menorNumero) {
//         menorNumero = numbers[index];
//     }
// }
// console.log(menorNumero)

// exercicio 7 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


let array = [];

for (let index = 1 ; index <= 25 ; index += 1){
array.push(index) 
}
console.log(array)

//exercicio 8 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

for (let index2 = 0 ; index2 < array.length ; index2 +=1) {
    console.log(array[index2] / 2)
}

//exercicio 9 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^