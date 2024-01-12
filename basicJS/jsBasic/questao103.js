/*
Pesquisar perfil
Temos uma variedade de objetos que representam pessoas diferentes em nossas listas de contatos.

Uma função lookUpProfile, que recebe name e uma propriedade (prop) como argumentos, foi pré-escrita para você.

A função deve verificar se name é o firstName (primeiro nome) de um contato e se a propriedade passada (prop) é uma propriedade de contato.

Se ambos são verdadeiros, então retorne o "valor" aquela propriedade.

Se name não corresponde a nenhum dos contatos, então retorne uma string No such contact.

Se prop não representa nenhuma propriedade válida de um contato encontrado para coincidir com name então retorne a string No such property .


*/

// Configuração
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Altere apenas o código abaixo desta linha
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === name) {
        if (contacts[i].hasOwnProperty(prop)) {
          return contacts[i][prop]; // Retorna o valor da propriedade se existir
        } else {
          return "No such property"; // Retorna se a propriedade não existir
        }
      }
    }
    return "No such contact"; // Retorna se o nome não for encontrado
    // Altere apenas o código acima desta linha
  }
  
  lookUpProfile("Akira", "likes");