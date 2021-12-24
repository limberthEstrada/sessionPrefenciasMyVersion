const express = require('express')
const session = require('express-session');
const cookies = require('cookie-parser')
const main = require('./routes/main')
const {estaDespiertoLaCookie} = require('./middlewares/validationUser')

let app = express();


//acá voy a agregar los middlewares globales
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(session({secret:"Mi secreto UwU", resave:false, saveUninitialized:false}))
app.use(cookies())

app.use(estaDespiertoLaCookie);
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use('/', main);

app.listen(3000, ()=> console.log("Se abrio el servidor ✨🎈"))