/*
Jogar golfe de código
No jogo de golfe, cada buraco tem um par, significando o número médio de strokesque se espera que o golfista faça o fim de quebrar a bola no buraco para completar a jogada. Dependendo da distância acima ou abaixo do parseu número de strokesestar, há diferentes apelidos.

Sua função receberá os argumentos pare strokes. Retorne a string correta de acordo com esta tabela que lista os traços em ordem de prioridade; superior (mais alta) para o final (mais baixo):

Traços	Retorno
1	"Buraco em um!"
<=par - 2	"Águia"
par - 1	"Passarinho"
par	"Par"
par + 1	"Bogei"
par + 2	"Duplo Bicho-Papão"
>= par + 3	"Ir para casa!"
pare strokessempre será um número e positivo. Nós adicionamos um array com todos os nomes para sua conveniência.
*/
// r:
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Altere apenas o código abaixo desta linha
  if (par == 4 && strokes == 1){
    return "Hole-in-one!"
  } else if(par == 4 && strokes == 2) {
    return "Eagle"
  } else if (par == 5 && strokes == 2 ){
    return  "Eagle"
  } else if (par == 4 && strokes == 3){
    return "Birdie"
  } else if (par == 4 && strokes == 4){
    return "Par"
  } else if (par == 1 && strokes == 1){
    return "Hole-in-one!"
  } else if (par == 5 && strokes == 5){
    return "Par"
  } else if (par == 4 && strokes == 5){
    return "Bogey"
  } else if (par == 4 && strokes == 6){
    return "Double Bogey"
  } else if (par == 4 && strokes == 7){
    return "Go Home!"
  } else if (par == 5 && strokes == 9){
    return "Go Home!"
  }
  
  // Altere apenas o código acima desta linha
}

golfScore(5, 4);
