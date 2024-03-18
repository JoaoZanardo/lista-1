function isPalindrome(word) {
    const cleanWord = word.toLowerCase().replace(/\s/g, '')

    const reversedWord = cleanWord.split('').reverse().join('')

    return cleanWord === reversedWord
}

console.log(isPalindrome('arara'))
