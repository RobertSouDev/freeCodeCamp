// Definindo os dados de tintas e pintores
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

// Função para calcular a área da parede
function calcularArea(largura, altura) {
    return largura * altura;
}

// Função para calcular o orçamento
function calcularOrcamento(largura, altura, marcaTinta, pintor) {
    // Validando a marca da tinta e o pintor
    if (!tintas[marcaTinta]) {
        return "Marca de tinta inválida!";
    }
    if (!pintores[pintor]) {
        return "Pintor inválido!";
    }

    // Calculando a área da parede
    const area = calcularArea(largura, altura);

    // Calculando a quantidade de tinta necessária (1 litro cobre 10m²)
    const tintaPorMetroQuadrado = 10;
    const tintaNecessaria = area / tintaPorMetroQuadrado;
    const tintaComDesperdicio = tintaNecessaria * (1 + pintores[pintor].desperdicio);

    // Calculando o custo da tinta
    const custoTinta = tintaComDesperdicio * tintas[marcaTinta];

    // Calculando o número de horas necessárias para pintar a parede
    const horasNecessarias = area / pintores[pintor].desempenhoPorHora;
    const diasNecessarios = Math.ceil(horasNecessarias / 8);

    // Calculando o custo da mão de obra
    const custoMaoDeObra = diasNecessarios * pintores[pintor].diaria;

    // Calculando o custo total
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

// Exemplo de uso
const largura = 10; // em metros
const altura = 3; // em metros
const marcaTinta = "Coral";
const pintor = "David";

const orcamento = calcularOrcamento(largura, altura, marcaTinta, pintor);
console.log(orcamento);