import * as r from "readline-sync";


/* Sumar dos arreglos (con funciones)
Sumar los elementos de cada una de las posiciones de dos arreglos y guardar el resultado en otro arreglo.
El arreglo tiene dimensión 6 y los números de los dos vectores los carga el usuario.
*/

let arr1: number[] = new Array(6);
let arr2: number[] = new Array(6);
let arr3: number[] = new Array(6);


function cargarArrNum(arr: number[]): void {
  for (let i: number = 0; i < arr.length; i++) {
    arr[i] = r.questionInt(`Input number in position ${i + 1}: `);
  }
}

cargarArrNum(arr1);
cargarArrNum(arr2);
console.log(arr1,arr2);


