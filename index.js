import express from "express"
import handlebars from "express-handlebars"
import Handlebars from "handlebars"
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access"
import bodyParser from "body-parser"
import { fileURLToPath } from "url"
import path from "path"

const app = express()
const __dirname = path.dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.join(__dirname, 'public')))

app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

import aluno from './routes/aluno.js'
app.use('/', aluno )

app.get('/', (req, res)=>{
    res.render('admin/main')
})


app.listen(3000, () => {console.log("Servidor Rodando em http://localhost:3000")})
