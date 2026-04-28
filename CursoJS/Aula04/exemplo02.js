// Programa para listar todas as funções globais e métodos de objetos built-in do JavaScript

console.log("Funções globais do JavaScript:");
const funcoesGlobais = Object.getOwnPropertyNames(global).filter(name => typeof global[name] === 'function');
funcoesGlobais.forEach(funcao => console.log(funcao));

console.log("\nMétodos de Array:");
const metodosArray = Object.getOwnPropertyNames(Array.prototype).filter(name => typeof Array.prototype[name] === 'function');
metodosArray.forEach(metodo => console.log(metodo));

console.log("\nMétodos de String:");
const metodosString = Object.getOwnPropertyNames(String.prototype).filter(name => typeof String.prototype[name] === 'function');
metodosString.forEach(metodo => console.log(metodo));

console.log("\nMétodos de Number:");
const metodosNumber = Object.getOwnPropertyNames(Number.prototype).filter(name => typeof Number.prototype[name] === 'function');
metodosNumber.forEach(metodo => console.log(metodo));

console.log("\nMétodos de Boolean:");
const metodosBoolean = Object.getOwnPropertyNames(Boolean.prototype).filter(name => typeof Boolean.prototype[name] === 'function');
metodosBoolean.forEach(metodo => console.log(metodo));

console.log("\nMétodos de Object:");
const metodosObject = Object.getOwnPropertyNames(Object.prototype).filter(name => typeof Object.prototype[name] === 'function');
metodosObject.forEach(metodo => console.log(metodo));

console.log("\nMétodos de Function:");
const metodosFunction = Object.getOwnPropertyNames(Function.prototype).filter(name => typeof Function.prototype[name] === 'function');
metodosFunction.forEach(metodo => console.log(metodo));

console.log("\nMétodos de RegExp:");
const metodosRegExp = Object.getOwnPropertyNames(RegExp.prototype).filter(name => typeof RegExp.prototype[name] === 'function');
metodosRegExp.forEach(metodo => console.log(metodo));

console.log("\nMétodos de Date:");
const metodosDate = Object.getOwnPropertyNames(Date.prototype).filter(name => typeof Date.prototype[name] === 'function');
metodosDate.forEach(metodo => console.log(metodo));

console.log("\nFunções de Math:");
const funcoesMath = Object.getOwnPropertyNames(Math).filter(name => typeof Math[name] === 'function');
funcoesMath.forEach(funcao => console.log(funcao));