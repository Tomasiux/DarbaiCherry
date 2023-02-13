const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

const listRoutes = require('./routes/list')
const galeryRoutes = require('./routes/galery')
const middlewareRoutes = require('./routes/middleware')

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

app.use(middlewareRoutes)
app.use(listRoutes)
app.use(galeryRoutes)
app.use('/', express.static(path.join(__dirname, 'uploads')))

app.get('/galery', (req, res) => {
    let images = getImagesFromDir(path.join(__dirname, 'uploads'));
     res.render('galery', {images: images })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`)
})