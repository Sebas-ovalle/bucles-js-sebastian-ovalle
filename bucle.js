 // N°1 | Realizar un programa que permita el ingreso de un número y muestre su tabla de
// multiplicar (Los primeros 10 múltiplos). 

// const numero = parseInt(prompt("Ingrese un número:"));

// for ( i = 1; i <= 10; i++){
//  console.log(`${numero} ${i} = ${numero * i}`)
// }

// N°2 | Realizar un programa que permita el ingreso de números los cuales se tienen que ir
// acumulando. El ingreso de datos terminará cuando el usuario ingrese un valor 0.

// let acumulado = 0;
// let numero = 1;

// while (numero != 0){
//     numero = prompt(" ingrese su numero `o presione 0 para salir`")
//     acumulado += numero;
// }
// console.log("el valor acumulado es:" + acumulado)

// N°3 | Realizar en juego de adivinar el número de los ejercicios del tema anterior, en una
// variable guardar un número que esté en el rango 1 - 100. La persona deberá poder ingresar
// números hasta adivinar el valor que se encuentre en dicha variable. Si el valor es menor al
// número secreto, avisarle al usuario lo sucedido y pedirle nuevamente el ingreso de otro
// número, realizar la misma acción pero en lugar de cuando es menor, si es que el número
// ingresado es mayor. Así sucesivamente hasta que el usuario adivine el número secreto. Por
// último mostrar un mensaje de felicitaciones y decirle en cuantos intentos lo ha realizado.

// Generar número aleatorio entre 1 y 100

// const numeroRandom = Math.floor(Math.random() * 100);

// let intentos = 0;

// let numeroUsuario = parseInt(prompt("Adivina (entre 1 y 100)"));

// while (numeroUsuario !== numeroRandom) {
//   intentos++;
  
//   if (numeroUsuario < numeroRandom) {
//     numeroUsuario = parseInt(prompt("El número ingresado es menor"));
//   } else {
//     numeroUsuario = parseInt(prompt("El número ingresado es mayor"));
//   }
// }
// alert(` Ganaste  tu numero de intentos es: ${intentos}`)

// N°4 Realizar un programa que permita decir si un número es primo. Un número es primo si solo es divisible
// por el valor 1 y por sí mismo. Ayuda: Usar la operación de módulo. Los números solo poseen divisores hasta la
// mitad del valor del mismo. Ej: 50 tiene como divisores 1, 2, 5, 10 y 25. No es primo. Con tener más de 2
// divisores el número ya no es primo.


// function esPrimo(num) {
//     if (num < 2) {
//       alert("no es primo");
//     }
//     for (let i = 2; i <= num / 2; i++) {
//     if (num % i === 0) {
//     alert("no es primo");
//       }
//     }
//     alert("es primo");
//   }
//   console.log(esPrimo(2))

// N°5 | Realizar un programa que permita dado un numero, mostrar todos sus divisores.

// const numero = parseInt(prompt("Ingrese un número:"));

// for ( i = 1; i <= 10; i++){
//  console.log(`${numero} ${i} = ${numero / i}`)
// }

// N°6 | Dado un array de 10 elementos, realizar un programa que recorra ese array y muestre un mensaje por
// consola con cada uno de los elementos del array.

// const arrayContent = [1,2,3,4,5,6,7,8,9,10]
//     for ( let i=0; i<10; i++){
//         console.log(` elemento:` + arrayContent[i])
//     }

// N°7 | Dado un array de 10 números, realizar un programa que muestre por consola el doble de cada uno de
// los elementos.

// const arrayContent = [1,2,3,4,5,6,7,8,9,10]
//     for ( let i=0; i<10; i++){
//         console.log(` elemento: ${arrayContent[i]*2}`)
//}

// N°8 | Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada objeto representa a 1
// persona con al menos 4 propiedades, realizar un programa que muestre un mensaje de presentación por
// cada elemento del array.
// Definimos un array con los datos del grupo familiar

// let familia = [
//     { nombre: 'Juan', edad: 35, genero: 'masculino', relacion: 'padre' },
//     { nombre: 'Ana', edad: 33, genero: 'femenino', relacion: 'madre' },
//     { nombre: 'Pedro', edad: 10, genero: 'masculino', relacion: 'hijo' },
//     { nombre: 'Lucía', edad: 8, genero: 'femenino', relacion: 'hija' },
//     { nombre: 'Miguel', edad: 60, genero: 'masculino', relacion: 'abuelo' }
//   ];
  
//   // Recorremos el array y mostramos un mensaje de presentación para cada persona
//   for (let i = 0; i < familia.length; i++) {
//     let persona = familia[i];
//     console.log(`Hola, soy ${persona.nombre}, tengo ${persona.edad} años, soy ${persona.genero} y soy ${persona.relacion} en mi familia.`);
//   }

// N°9 | Dado un array de 10 números, realizar un programa que recorra el array y solo muestre los números
// impares.

// const numeros = [2, 5, 10, 15, 20, 25, 30, 35, 40, 45, 100, 111, 112, 321];

// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] % 2 !== 0) {
//     console.log(numeros[i]);
//   }

// }

// N°10 | Realizar un programa que permita la entrada de números y calcule la suma de los números pares por
// un lado y los impares por otro, el ingreso de dato finaliza cuando el usuario ingresa un 0.

// let sumaPares = 0;
// let sumaImpares = 0;
// let numero = parseInt(prompt("Ing núm 0 para salir:"));

// while(numero !== 0) {
//   if(numero % 2 === 0) {
//     sumaPares += numero;
//   } else {
//     sumaImpares += numero;
//   }
//   numero = parseInt(prompt("ing núm 0 para salir:"));
// }
// console.log("La suma es par: " + sumaPares);
// console.log("La suma es impar: " + sumaImpares);

// N°11 | Dado un array de 10 números, realizar un programa que imprima por pantalla el número más grande.

// const array = [5,10,80,60,13,18,98,54,22,28]

// array.sort((a,b) => b -a)
// console.log(array)

// N°12 | Dado un array de 10 números, realizar un programa que imprima por pantalla el número más chico.

// const array = [5,10,80,60,13,18,98,54,22,28]

// array.sort((a,b) => a -b)
// console.log(array)

// N°13 | Realizar un programa que permita jugar a piedra papel o tijeras, se deberá poder ingresar los nombres
// de 2 jugadores. En el bucle del juego se deberá pedir 1 a 1 las manos de cada jugador, y en cada turno se
// deberá seguir jugando solo si se produjo un empate. Caso contrario mostrar un mensaje con el nombre de la
// persona ganadora.

// let jugador1 = prompt("Nombre del jugador 1:");
// let jugador2 = prompt("Nombre del jugador 2:");

// while (true) {
//   let jugada1 = prompt(jugador1 + ", ¿piedra, papel o tijeras?");
//   let jugada2 = prompt(jugador2 + ", ¿piedra, papel o tijeras?");

//   if (jugada1 === jugada2) {
//     console.log("Empate! Sigue jugando.");
//   } else if (
//     (jugada1 === "piedra" && jugada2 === "tijeras") ||
//     (jugada1 === "papel" && jugada2 === "piedra") ||
//     (jugada1 === "tijeras" && jugada2 === "papel")
//   ) {
//     console.log(jugador1 + " gana!");
//     break;
//   } else {
//     console.log(jugador2 + " gana!");
//     break;
//   }
// }

// N°14 | Realizar un programa que imprima por consola un triángulo de 5 asteriscos de lado.

// for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//       row += '*';
//     }
//     console.log(row);
//   }

// N°15 | Realizar un programa que imprima por consola un triángulo de 5 asteriscos de lado pero invertido.

// for (let i = 5; i >= 1; i--) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += "*";
//     }
//     console.log(row);
//   }

// N°16 | Dado un array de 10 números desordenados, realizar un programa que imprima por pantalla el array
// ordenado. (NO USAR SORT, solo ciclos FOR)

// let numeros = [5, 3, 9, 1, 10, 8, 2, 7, 6, 4];

// for (let i = 0; i < numeros.length; i++) {
//   for (let j = i + 1; j < numeros.length; j++) {
//     if (numeros[i] > numeros[j]) {
//       let temp = numeros[i];
//       numeros[i] = numeros[j];
//       numeros[j] = temp;
//     }
//   }
// }

// console.log(numeros);