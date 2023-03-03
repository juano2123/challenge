const conctat1 = ['a', 'b', 'c'];
const concat2 = ['d', 'e', 'f'];
const concat3 = conctat1.concat(concat2);
// concatena los array

const copyWithinArray = ['a', 'b', 'c', 'd', 'e'];
console.log(copyWithinArray.copyWithin(0, 3, 4));
// transfiere una copia plana de una sección a otra dentro del mismo array

const iterator1 = conctat1.entries();
console.log(iterator1.next().value);
//retorna un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice de la matriz.

const isBelowThreshold = (currentValue) => currentValue < 40;
const isBelowThresholdarray = [1, 30, 39, 29, 10, 13];
console.log(isBelowThresholdarray.every(isBelowThreshold));
// Determina si todos los elementos en el array satisfacen una condición.

console.log(conctat1.fill(0, 2, 4));
//  cambia todos los elementos en un arreglo por un valor estático, desde el índice start (por defecto 0) hasta el índice end 

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result); 
// crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada

const arrayfind = [5, 12, 8, 130, 44];
const found = arrayfind.find(element => element > 10);
console.log(found);
//devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

const arrayfindIndex = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(arrayfindIndex.findIndex(isLargeNumber));
// devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
console.log('forEach')
conctat1.forEach(element => console.log(element));
//ejecuta la función indicada una vez por cada elemento del array.

console.log(conctat1.includes(2));
//determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.

const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
//une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.

const iteratorkey = conctat1.keys();
for (const key of iteratorkey) {
  console.log(key);
}
//devuelve un nuevo objeto Array Iterator que contiene las claves de índice con las que acceder a cada elemento en el array

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo'));
//devuelve el último índice en el que un cierto elemento puede encontrarse en el arreglo, ó -1 si el elemento no se encontrara.

var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
});
//crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
// elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.

const animalspush = ['pigs', 'goats', 'sheep'];
const count = animalspush.push('cows');
console.log(count);
//añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

const initialValue = 0;
const sumWithInitial = arrayfind.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sumWithInitial);
//ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

const reversed = words.reverse();
console.log('reversed:', reversed);
//invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero.

var miPescado = ['ángel', 'payaso', 'mandarín', 'cirujano'];
console.log('miPescado antes: ' + miPescado);
var eliminado = miPescado.shift();
console.log('miPescado después: ' + miPescado);
console.log('Elemento eliminado: ' + eliminado);
//elimina el elemento en el índice cero y desplaza los valores consecutivos hacia abajo, devolviendo el valor eliminado. Si la propiedad length es 0, devuelve undefined.

var animalsslice = animals.slice(1, 3);
console.log(animalsslice)
//devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.

const arraysome = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(arraysome.some(even));
//comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

var frutas = ['guindas', 'manzanas', 'bananas'];
console.log(frutas.sort());
//ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);
//cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

const arraylocaleString = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = arraylocaleString.toLocaleString('en', { timeZone: 'UTC' });
console.log(localeString);
//Devuelve un string adaptado a la configuración regional que representa el array y sus elementos. 

const arraytostring = [1, 2, 'a', '1a'];
console.log(arraytostring.toString());
//devuelve una cadena de caracteres representando el array especificado y sus elementos.

console.log(conctat1.unshift(4, 5));
//agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.

var a = ['w', 'y', 'k', 'o', 'p'];
var interactorvalues = a.values();
console.log(interactorvalues.next().value); 
console.log(interactorvalues.next().value); 
console.log(interactorvalues.next().value); 
console.log(interactorvalues.next().value); 
console.log(interactorvalues.next().value);
//devuelve un nuevo objeto Array Iterator que contiene los valores para cada índice del array.

var eArr = a[Symbol.iterator]();
for (let letter of eArr) {
  console.log(letter);
}
//El valor inicial de la propiedad @@iterator es el mismo objeto de función que el valor inicial de la propiedad values().



