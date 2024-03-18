const formatName = (name) => {
    return name.replace(/[^\w\s]/gi, '').toLowerCase()
}

const formatToEmail = (fullName) => {
    const splittedName = fullName.split(' ')

    const firstName = splittedName[0].toLowerCase()
    const lastName = splittedName[splittedName.length - 1].toLowerCase()

    return `${firstName}.${lastName}@facens.br`
}

console.log(formatToEmail('Jonh Gui July'))