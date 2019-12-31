const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
//database
const db = require('./config/database')



//test db
db.authenticate()
    .then(() => console.log('Database connected ...'))
    .catch(err => console.log('Error : ' + err))

const app = express()

//handlebars
app.engine('handlebars', exphbs({ defaultLayout : 'main'}));
app.set('view engine', 'handlebars');

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')))

//Index Route
app.get('/', (req, res) => {
    res.render('index', { layout : 'landing'})
})

//Gig routes
app.use('/gigs', require('./routes/gigs'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Running on localhost:${PORT}`))