const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('stats')
    return res.json({'stat': "111"})
})

module.exports = router;