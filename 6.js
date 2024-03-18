const duplicate = (number) => {
    if (number <= 0) return console.log('Só é aceito números positivos maiores que zero')

    return number * 2
}

console.log(duplicate(5))
console.log(duplicate(-1))