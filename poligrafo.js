const prompt= require("prompt-sync") ( )

console.log("Responda apenas sim ou nao.")

console.log("                ")

const pergunta1 = prompt("Você conhecia a vítima ? ");
console.log("Próxima pergunta...");
const pergunta2 = prompt("Possui algum álibi ? ");
console.log("Próxima pergunta...");
const pergunta3 = prompt("Já ouviu falar da vítima ? ");
console.log("Próxima pergunta...");
const pergunta4 = prompt("Possuia algum ressentimento com a vítima ? ");
console.log("Próxima pergunta...");
const pergunta5 = prompt("Está confortável nessa sala ?" );
console.log("Próxima pergunta...");
const pergunta6 = prompt("Morava perto da vítima ? ");
console.log("Próxima pergunta...");
const pergunta7 = prompt("Conhecia alguem com ressentimentos em relação a vítima ? ");
console.log("Próxima pergunta...");
const pergunta8 = prompt("Ela era conhecida na região ? ");
console.log("Próxima pergunta...");
const pergunta9 = prompt("Você está mais feliz que o normal ultimamente ? ");
console.log("Próxima pergunta...");
const pergunta10 = prompt("Sabe a arma do crime ? ");
console.log("Processando resultado...");

let sim = 0;
let total_sim;

switch (pergunta1) {
    case (sim):
           sim = 1;
    break;
     default: 
}
switch (pergunta2) {
    case (sim):
        total_sim = sim + 1;
    break;
     default:
        
}

console.log(sim)

if (sim < 5) {

} else if (sim = 5) {

} else if (sim > 5 && sim < 9) {

} else {

}