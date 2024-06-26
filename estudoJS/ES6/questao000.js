
const tintas = {
    Coral: 25,
    Decor: 45,
    Suvinil: 50
};

const pintores = {
    David: {
        diaria: 200,
        desperdicio: 0,
        desempenhoPorHora: 7
    },
    Ysla: {
        diaria: 150,
        desperdicio: 0.10,
        desempenhoPorHora: 5
    },
    Jéssica: {
        diaria: 100,
        desperdicio: 0.25,
        desempenhoPorHora: 4
    }
};


function calcularArea(largura, altura) {
    return largura * altura;
}


function calcularOrcamento(largura, altura, marcaTinta, pintor) {
  
    if (!tintas[marcaTinta]) {
        return "Marca de tinta inválida!";
    }
    if (!pintores[pintor]) {
        return "Pintor inválido!";
    }

 
    const area = calcularArea(largura, altura);

 
    const tintaPorMetroQuadrado = 10;
    const tintaNecessaria = area / tintaPorMetroQuadrado;
    const tintaComDesperdicio = tintaNecessaria * (1 + pintores[pintor].desperdicio);

    
    const custoTinta = tintaComDesperdicio * tintas[marcaTinta];

 l
    const horasNecessarias = area / pintores[pintor].desempenhoPorHora;
    const diasNecessarios = Math.ceil(horasNecessarias / 8);

   
    const custoMaoDeObra = diasNecessarios * pintores[pintor].diaria;


    const custoTotal = custoTinta + custoMaoDeObra;

    return {
        area: area,
        tintaNecessaria: tintaComDesperdicio.toFixed(2),
        custoTinta: custoTinta.toFixed(2),
        horasNecessarias: horasNecessarias.toFixed(2),
        diasNecessarios: diasNecessarios,
        custoMaoDeObra: custoMaoDeObra.toFixed(2),
        custoTotal: custoTotal.toFixed(2)
    };
}


const largura = 10; 
const altura = 3; 
const marcaTinta = "Coral";
const pintor = "David";

const orcamento = calcularOrcamento(largura, altura, marcaTinta, pintor);
console.log(orcamento);