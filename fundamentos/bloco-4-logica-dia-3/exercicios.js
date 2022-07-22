let fatorial = 10;
let resultado = 0;

for (let index = 1 ; index < fatorial ; index += 1){
    resultado += index * fatorial ;

}
console.log(resultado)


let word ='estudante'
let invertida

for (let index = word.length; index >= 0 ; index -= 1) {
   invertida += word[index];
}

console.log(invertida);

let array = ['java' , 'javascript' , 'python' , 'html' , 'css'] ;

let maiorPalavra
for ( let index = 0 ; index < array.length ; index += 1){
for (let index2 = 0 ; index2 < array.length ; index += 1)
if (array[index2] > array[index]) 
maiorPalavra = array[index2];
}
console.log(maiorPalavra)