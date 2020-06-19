const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('home')
    return res.json({'home': "sweet home"})
})

module.exports = router;