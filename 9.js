const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

console.log(isEmail('joao.com'))
console.log(isEmail('joao@mail.com'))