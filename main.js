let num1= 10, num2 = 80;
let resultado;
//equality
resultado = num1==num2;
console.log(`${num1} es igual a ${num2}?
R: ${resultado}`);

//ineqyality
resultado = num1 != num2;
console.log(`${num1} es desigual a ${num2}?
R: ${resultado}`);

//identity
let num3 = 40;
let num4 = 40;
resultado = num3 === num4;
console.log(`${num3} es identico a ${num4}? 
R: ${resultado}`);

// non-identity
resultado = num3 !== num4;
console.log(`${num1} no es identico a ${num2}?
R: ${resultado}`);

// greater than
resultado = num1>num4;
console.log(`${num1} es mayor que ${num4}?
R: ${resultado}`);

// geater than or equal
resultado = num2 >= num4;
console.log(`${num2} es igual o mayor que ${num4}
R: ${resultado}`);

// less than
resultado = num3<num1;
console.log(`${num3} es menor que ${num1}?
R: ${resultado}`);

// less than or equal
resultado = num2 <= num1;
console.log(`${num2} es menor o igual que ${num1}?
R: ${resultado}`);