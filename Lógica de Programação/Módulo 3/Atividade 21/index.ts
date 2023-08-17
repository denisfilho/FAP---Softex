function buscaBinaria(array: number[], valor_procurado: number){
    let esquerda = 0;
    let direita = array.length - 1;
  
    while (esquerda <= direita) {
      const meio = Math.floor((esquerda + direita) / 2);
  
      if (array[meio] === valor_procurado) {
        return meio; // Encontrou o elemento
      } else if (array[meio] < valor_procurado) {
        esquerda = meio + 1; // Busca na metade direita
      } else {
        direita = meio - 1; // Busca na metade esquerda
      }
    }
  
    return null; // Elemento não encontrado
  }
  
  const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
  const valor_procurado = 20;
  const posicao = buscaBinaria(array, valor_procurado);
  
  if (posicao !== null) {
    console.log(`O elemento ${valor_procurado} foi encontrado no índice ${posicao}.`);
  } else {
    console.log(`O elemento ${valor_procurado} não foi encontrado no array.`);
  }