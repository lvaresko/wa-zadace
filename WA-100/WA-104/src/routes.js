import  data from './students.json'

let studenti = (req, res) => res.send(data.students)
let first = (req, res) => res.send(data.students[0])
let last = (req, res) => res.send(data.students[data.students.length - 1])


export default { studenti, first, last } 