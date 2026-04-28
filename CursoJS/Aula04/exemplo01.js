// Função para listar funções de um objeto específico
const listarFuncoes = (obj, nome) => {
    const propriedades = Object.getOwnPropertyNames(obj);
    const funcoes = propriedades.filter(p => typeof obj[p] === 'function');
    
    console.log(`--- Funções encontradas em: ${nome} (${funcoes.length}) ---`);
    console.log(funcoes.join(', '));
    console.log('\n');
};

// 1. Listar funções globais (Ex: parseInt, fetch, encodeURI)
listarFuncoes(globalThis, 'Global');

// 2. Listar métodos de Arrays
listarFuncoes(Array.prototype, 'Array.prototype');

// 3. Listar métodos de Strings
listarFuncoes(String.prototype, 'String.prototype');

// 4. Listar métodos matemáticos
listarFuncoes(Math, 'Objeto Math');
