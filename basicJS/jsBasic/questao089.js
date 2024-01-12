/*
Objetos podem ser pensados como armazenamento de chave/valor, como um dicionário. Se você tem um dado tabular, você pode usar um objeto para pesquisar valores ao invés de uma instrução switch ou uma cadeia de if/else. Isso é mais útil quando você sabe que o seu dado de entrada é limitado para um certo intervalo.

Aqui está um exemplo de um objeto de artigo:

const article = {
  "title": "How to create objects in JavaScript",
  "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
  "author": "Kaashan Hussain",
  "language": "JavaScript",
  "tags": "TECHNOLOGY",
  "createdAt": "NOVEMBER 28, 2018"
};

const articleAuthor = article["author"];
const articleLink = article["link"];

const value = "title";
const valueLookup = article[value];
articleAuthor é a string Kaashan Hussain, articleLink é a string https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/ e valueLookup é a string How to create objects in JavaScript.

Converta a instrução switch em um objeto chamado lookup. Use-o para pesquisar por val e atribua a string associada para a variável result.


*/

// Configuração
function phoneticLookup(val) {
    let result = "";
  
    // Altere apenas o código abaixo desta linha
    let resulta = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    } 
    result = resulta[val]
    // Altere apenas o código acima desta linha
    return result;
  }
  
  phoneticLookup("");