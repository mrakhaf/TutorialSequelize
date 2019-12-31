const express = require('express')
const router = express.Router();
const db = require('../config/database')
const Gig = require('../models/Gig')

//Get gig list
router.get('/',(req, res) => {
    Gig.findAll()
        .then(gigs => {
            res.render('gigs', {
                gigs
            })
        })
        .catch(err => console.log(err))
})

//Display add gig form
router.get('/add', (req, res) => {
    res.render('add')
})

//Add a gig
router.post('/add', (req, res) =>{
    const data = {
        title : 'Simple wordpress website',
        technologies : 'Wordpress, Php, Html, Css',
        budget : '$1000',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat non massa in congue. Suspendisse posuere sodales nibh, ut faucibus nulla porttitor non. Sed vel ipsum velit. Phasellus sagittis odio eget felis malesuada aliquet. Morbi eleifend consequat leo, dapibus auctor orci dictum et. Aenean faucibus purus libero,',
        contact_email : 'user2@gmail.com'
    }

    let {title, technologies, budget, description, contact_email } = data;
    
    //insert into table
    Gig.create({
        title,
        technologies,
        budget,
        description,
        contact_email
    })
        .then(gig => res.redirect('/gigs'))
        .catch(err => console.log(err))

})

module.exports = router;