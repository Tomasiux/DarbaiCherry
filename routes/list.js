const {Router} = require('express')
const router = Router()

var list = [{name: 'Pirmas'}, {name: 'Antras'}, {name: 'Trečias'}]

router.get('/', (req, res) => {
    res.render('home', {
        isHome: true
    })
})

router.get('/list', (req, res) => {
    res.render('list', {
        islist: true,
        list
    })
})

router.get('/remove/:name', (req, res) => {
    const name = req.params.name

    list = list.filter(function(el) { return el.name != name; });

    res.redirect('/list')
})

module.exports = router