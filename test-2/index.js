// Ejercicio 2: Nomenclatura
// Te presentamos el siguiente fragmento de código:

function f(x, y, z) {
  let a = x + y;
  let b = a * z;
  let c = Math.sin(b);
  return c;
}

// Reemplaza los nombres de las variables con nombres más descriptivos que reflejen mejor
// su función.

function calculateTrigonometricFunction(x, y, z) {
  let sum = x + y;
  let product = sum * z;
  let trigonometricResult = Math.sin(product);
  return trigonometricResult;
}

// Para probar
const result = calculateTrigonometricFunction(1, 2, 3);
console.log(result);
