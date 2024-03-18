function inverterString(str) {
    return str.split('').reverse().join('')
}
  
const minhaString = 'Olá, mundo!'
const stringInvertida = inverterString(minhaString)
  
console.log(stringInvertida)