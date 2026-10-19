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
const pergunta5 = prompt("Está confortável nessa sala ? ");
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

switch (pergunta1) {
    case ("sim"):
           sim = 1;
    break;
}
switch (pergunta2) {
    case ("sim"):
       sim += 1;
    break;
}
switch (pergunta3) {
    case ("sim"):
       sim += 1;
    break;
}
switch (pergunta4) {
    case ("sim"):
       sim += 1;
    break;
}
switch (pergunta5) {
    case ("sim"):
       sim += 1;
    break;
}
switch (pergunta6) {
    case ("sim"):
       sim += 1;
    break;
}
switch (pergunta7) {
    case ("sim"):
       sim += 1;
    break;
}
switch (pergunta8) {
    case ("sim"):
       sim += 1;
    break;
}
switch (pergunta9) {
    case ("sim"):
       sim += 1;
    break;
}
switch (pergunta10) {
    case ("sim"):
       sim += 1;
    break;
}

if (sim < 5) {
       console.log("Você é inocente, está liberado...")
       console.log("Você respondeu um total de ", sim, " sim e é inocente")
} else if (sim === 5) {
       console.log("Por enquanto é isso, espere naquela sala...")
       console.log("Você respondeu um total de ", sim, " sim e é suspeito.")
} else if (sim > 5 && sim < 9) {
       console.log("Você estava envolvido no assasiato, continue aqui...")
       console.log("Você respondeu um total de ", sim, " sim e é cumplíce.")
} else {
       console.log("Você é culpado, Tudo que falar pode e será usado contra vcê no tribunal...")
       console.log("Você respondeu um total de ", sim, " sim e é culpado.")
}