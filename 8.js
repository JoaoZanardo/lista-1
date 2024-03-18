function countVowels(string) {
    string = string.toLowerCase()

    const vowels = ['a', 'e', 'i', 'o', 'u']

    let count = 0

    for (let char of string) {
        if (vowels.includes(char.toLowerCase())) {
            count++
        }
    }

    return count
}

console.log(countVowels('Joao GuilhermE'))
