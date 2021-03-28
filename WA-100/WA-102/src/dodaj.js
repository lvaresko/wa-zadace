import lista from './lista.js'

function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(100));
}

let dodaj = (req, res) => {
    let broj = getRandomInt()
    lista.push(broj)
    res.send('Dodajem ' + parseInt(broj) + '...' )
}

export default dodaj 