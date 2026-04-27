// Programa para listar algumas funções built-in do JavaScript

console.log('Funções globais:');
const globalFunctions = Object.getOwnPropertyNames(globalThis).filter(name => typeof globalThis[name] === 'function');
console.log(globalFunctions);

console.log('\nMétodos de Array:');
const arrayMethods = Object.getOwnPropertyNames(Array.prototype).filter(name => typeof Array.prototype[name] === 'function');
console.log(arrayMethods);

console.log('\nMétodos de String:');
const stringMethods = Object.getOwnPropertyNames(String.prototype).filter(name => typeof String.prototype[name] === 'function');
console.log(stringMethods);

console.log('\nFunções de Math:');
const mathFunctions = Object.getOwnPropertyNames(Math).filter(name => typeof Math[name] === 'function');
console.log(mathFunctions);

console.log('\nMétodos de Object:');
const objectMethods = Object.getOwnPropertyNames(Object.prototype).filter(name => typeof Object.prototype[name] === 'function');
console.log(objectMethods);
