function getOddNumbersUpToN(number) {
  if (Number.isInteger(number) && number > 0) {
    let odds = [];
    for (let i = 1; i <= number; i += 2) {
      odds.push(i);
    }
    return odds;
  } else {
    return "Por favor, ingresa un número entero positivo.";
  }
}

const result = getOddNumbersUpToN(9);
console.log(result);
