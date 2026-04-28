let fila = ["Ana", "Beto", "Carlos"];
fila.splice(1, 1, "edu", "fabio");
console.log(fila);


let ponto = [150, 132, 110, 95, 80, 75, 60];
let top3 = ponto.slice(0, 3);
console.log(top3);


let dados = [10, 20, "ERRO", "ERRO", 50, 60];
dados.splice(2, 2);
console.log(dados);


let convidados = ["Leo", "Bia", "Caio", "Lara", "Noah"];
let ultimos = convidados.slice(-2);
console.log(ultimos);


let cores = ["Vermelho", "Verde", "Azul"];
cores.splice(1, 1, "Amarelo", );
console.log(cores);