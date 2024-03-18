const number = 10

for (let i = 1; i <= number; i++) {
    process.stdout.write(`${i}${i < number ? '-' : ''}`)
}