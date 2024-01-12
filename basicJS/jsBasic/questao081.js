/*
No jogo de cassino Blackjack, um jogador pode determinar se tem uma vantagem sobre a próxima mão da casa, mantendo o número relativo de cartas altas e baixas restantes no baralho. Isso se chama "contar as cartas".

Ter cartas mais altas permanecendo no baralho favorecendo o jogador. Cada carta é atribuída um valor de acordo com a tabela abaixo. Quando o contador for positivo, o jogador deve apostar alto. Quando a contagem for zero ou negativa, o jogador deverá apostar baixo.

Mudança na contagem	Cartas
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'
Você vai escrever uma função de contagem de cartas. A função recebe um parâmetro card, que pode ser um número ou uma string, e incrementar ou decrementar uma variável global countde acordo com o valor da carta (veja a tabela). Em seguida, a função retornará uma string com o valor atual de contagem (variável count) e a string Betserá uma contagem para positiva, ou Holdse uma contagem para zero ou negativa. A contagem atual e a decisão do jogador ( Betou Hold) devem ser separadas por um único espaço.

Exemplo de saída: -3 Hold ou5 Bet

Dica
NÃO redefina o valor de countpara 0 quando o valor for 7, 8, ou 9. Não retorne um array.
Não incluindo aspas (simples ou duplas) na saída.

 */
let count = 0;

function cc(card) {
  // Altere apenas o código abaixo desta linha
  switch (card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count ++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count --;
      break;
  }
  var hold = " Bet"
  if (count < 1){
    hold = " Hold"
  }


  return count + hold;
  // Altere apenas o código acima desta linha
}

cc(2); cc(3); cc(7); cc('K'); cc('A');