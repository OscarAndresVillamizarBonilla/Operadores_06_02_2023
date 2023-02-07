


// Math.ceil(x)
// Devuelve el entero más pequeño mayor o igual que un número.
numvalor = 5.6;
nuevovalor = (Math.ceil(numvalor));
console.log(`el valor proximo mayor de ${numvalor} es ${nuevovalor}`);
//Math.ceil funciona para acercar el valor al siguiente numero de manera creciente ejm 1.3 seria 2


// Math.floor(x)
// Devuelve el mayor entero menor que o igual a un número.
nuevovalor = (Math.floor(numvalor));
console.log(`el valor menor mas cercano de ${numvalor} es ${nuevovalor}`);
//Math.floor funciona para acercar al valor hacia el numero anterior ejm 1.3 seria 1


// Math.max()
// Devuelve el mayor de cero o más números.
valor1 = 4;
valor2 = 5;
valor3 = 2;
nuevovalor = (Math.max(valor1, valor2, valor3));
console.log(`el mayor numero entre ${valor1}, ${valor2}, ${valor3} es ${nuevovalor}`);
//Math.max funciona para arrojar el numero mas grande de un determinado grupo de numeros.


// Math.min()
// Devuelve el más pequeño de cero o más números.
valor1 = 4;
valor2 = 5;
valor3 = 2;
nuevovalor = (Math.min(valor1, valor2, valor3));
console.log(`el menor numero entre ${valor1}, ${valor2}, ${valor3} es ${nuevovalor}`);
// Math.min funciona para arrojar el numero menor de un grupo de numeros.



// Math.pow(x, y)
// Las devoluciones de base a la potencia de exponente, que es, baseexponent.
nuevovalor = (Math.pow(valor1, valor3));
console.log(`si elevamos ${valor1} a ${valor3} da ${nuevovalor}`);
// Math.pow funciona para arrojar un valor elevado a otro valor diferente.



// Math.random()
// Devuelve un número pseudo-aleatorio entre 0 y 1.
function getRamdonInt(max) {
    return Math.floor(Math.random() * max);
}
console.log(Math.random(valor2));


// Math.round(x)
// Devuelve el valor de un número redondeado al número entero más cercano.
nuevovalor = (Math.round(numvalor));
console.log(`si redondeamos ${numvalor} nos dara resultado de ${nuevovalor}`);
// Math.round funciona para redondear un numero al numero mas proximo ejm 5.4 seria 5 y 5.6 seria 6

// Math.sqrt(x)
// Devuelve la raíz cuadrada positiva de un número.
num4 = 6;
num5 = 7;
num6 = 8;
function calcHypotenuse(num4, num5) {
    return (Math.sqrt(num4*num4));

}
console.log(calcHypotenuse(num4));


// Math.trunc(x)
// Devuelve la parte entera del número x, la eliminación de los dígitos fraccionarios.
nuevovalor = (Math.trunc(numvalor));
console.log(`la parte entera de ${numvalor} es ${nuevovalor}`);
// 5.68545.toFixed(x)
// Devuelve la cantidad de numeros decimal segun x

