import express from 'express';
import routes from './routes';
import cors from "cors"

const app = express() // instanciranje aplikacije
app.use(cors()) //omogući cors (cross origin resource sharing) na svim rutama 
const port = 8080 // port na kojem će web server slušati
app.get('/', routes.home)
app.get('/datum', routes.datum)
app.get('/prognoza', routes.prognoza)
app.listen(port, () => console.log(`Slušam na portu ${port}!`))