const router = require('express').Router();
const data = require('../../data/tournaments.json');

router.get('/', (req, res) => {
    return res.json(data)
})

module.exports = router;