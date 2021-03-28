import moment from 'moment';

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let home = (req, res) => res.send('ruta datum: http://localhost:3000/datum </br> ruta progonoza: http://localhost:3000/prognoza')
let datum = (req, res) => res.send(moment().format('DD.MM.YYYY HH:MM'))
let prognoza = (req, res) => {
    let vrijeme = ['sunčano', 'kišovito', 'oblačno']
    res.send('Danas će biti ' +  vrijeme[getRandomInt(vrijeme.length)] + '.')
}

export default { home, datum, prognoza } 