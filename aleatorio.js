const nomes = ["Tamiris","Laura", "Dalton", "Eduardo", "Matheus",
     "Victor", "Carlos", "Guilherme", "Lucas", "Yasmin", "Clarieli", "Cauan"];


export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);