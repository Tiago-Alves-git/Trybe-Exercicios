
function criaElementoTexto (qualPai , qualElemento , qualConteudo){
    const pai = document.getElementsByTagName(qualPai)[0];
    console.log(pai) ;
    let filho = document.createElement(qualElemento);
    filho.innerText = qualConteudo ;
    console.log(filho);
    pai.appendChild(filho);
}

criaElementoTexto ('body' ,'h1' , 'Exercício 5.2 - JavaScript DOM');


function criaTagComClasse (qualPai , qualTag , qualClasse , nomeAtributo , atributos){
    const pai = document.getElementsByTagName(qualPai)[0];
    console.log(pai) ;
    let filho = document.createElement(qualTag);
    filho.className = qualClasse;
    filho.setAttribute(nomeAtributo , atributos);
    console.log(filho);
    pai.appendChild(filho);
}

criaTagComClasse ('body' , 'main' , 'main-content');
criaTagComClasse ('main' , 'section' , 'center-content');
criaElementoTexto ('section' , 'p' , 'Algum texto criado para o exercicio');
criaTagComClasse ('main' , 'section' , 'left-content');
criaTagComClasse ('main' , 'section' , 'right-content');
criaTagComClasse ('section' , 'img' , 'small-image' , 'src' , 'https://picsum.photos/200');

function criaTagPelaClasse (qualPai , qualTag){
    const pai = document.getElementsByClassName(qualPai)[0];
    console.log(pai) ;
    let filho = document.createElement(qualTag);
    console.log(filho);
    pai.appendChild(filho);
}

criaTagPelaClasse ('right-content' , 'ul');
criaElementoTexto ('ul' , 'li' , 'um');
criaElementoTexto ('ul' , 'li' , 'dois');
criaElementoTexto ('ul' , 'li' , 'três');
criaElementoTexto ('ul' , 'li' , 'quatro');
criaElementoTexto ('ul' , 'li' , 'cinco');
criaElementoTexto ('ul' , 'li' , 'seis');
criaElementoTexto ('ul' , 'li' , 'sete');
criaElementoTexto ('ul' , 'li' , 'oito');
criaElementoTexto ('ul' , 'li' , 'nove');
criaElementoTexto ('ul' , 'li' , 'dez');
criaElementoTexto ('main' , 'h3' , 'Passo 9')
criaElementoTexto ('main' , 'h3' , 'Passo 9')
criaElementoTexto ('main' , 'h3' , 'Passo 9')

document.getElementsByTagName('h1').className = 'title';
document.getElementsByTagName('h3')[0].className = 'description';
document.getElementsByTagName('h3')[1].className = 'description';
document.getElementsByTagName('h3')[2].className = 'description';
let list = document.getElementsByTagName('main')[0];
list.removeChild(list.children[1]);
let margem = document.getElementsByClassName('right-content')[0];
console.log(margem);
margem.style.margin = 'auto';
let corDeFundo = document.getElementsByClassName('center-content')[0];
corDeFundo.style.backgroundColor = 'Green';
let list1 = document.getElementsByTagName('ul')[0];
list1.removeChild(list1.lastChild);
list1.removeChild(list1.lastChild);

