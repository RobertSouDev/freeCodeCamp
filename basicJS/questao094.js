/*
Exibir uma coleção de discos
Você está criando uma função que ajuda na manutenção de uma coleção de álbuns musicais. A coleção está organizada como um objeto que contém múltiplos álbuns que também são objetos. Cada álbum é representado na coleção com um id único como o nome da propriedade. Dentro de cada objeto de álbum, existem várias propriedades descrevendo informações sobre o álbum. Nem todos os álbuns possuem informações completas.

A função updateRecords recebe 4 argumentos representados pelos seguintes parâmetros de função:

records – um objeto contendo vários álbuns individuais
id – um número que representa um álbum específico no objeto records
prop – uma string que representa o nome da propriedade do álbum a ser atualizada
value – uma string contendo informações usadas para atualizar a propriedade do álbum
Complete a função usando as regras abaixo para modificar o objeto passado para a função.

A função precisa sempre retornar todo o objeto records.
Se value for uma string vazia, remova a propriedade prop recebida do álbum.
Se prop não for tracks e value não for uma string vazia, atribua value à prop daquele álbum.
Se prop for tracks e value não for uma string vazia, você precisa atualizar o array tracks do álbum. Primeiro, se o álbum não tiver uma propriedade tracks, atribua a ele um array vazio. Em seguida, adicione value como o último item do array tracks do álbum.
Observação: uma cópia do objeto recordCollection é usada para testes. Você não deve modificar diretamente o objeto recordCollection.
*/

// Configuração
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Altere apenas o código abaixo desta linha
  function updateRecords(records, id, prop, value) {
    if (value === '') {
      delete records[id][prop];
    } else if (prop !== 'tracks') {
      records[id][prop] = value;
    } else {
      if (!records[id].hasOwnProperty('tracks')) {
        records[id]['tracks'] = [];
      }
      records[id]['tracks'].push(value);
    }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');