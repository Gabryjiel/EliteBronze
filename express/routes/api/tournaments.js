const router = require('express').Router();
const db = require('../../db')

router.get('/', (req, res, next) => {
    db.query(`SELECT *
    FROM eb.matches m
    JOIN eb.player p ON p.id = m.blueplayerid
    JOIN eb.player p1 ON p1.id = m.redplayerid
    WHERE m.id = 1;`, [], (error ,response) => {
        if(error)
            return next(error)
        return res.json(response.rows)
    })
})

router.get('/:id', (req, res, next) => {
    db.query('SELECT * FROM eb.tournament WHERE id = $1', [req.params.id], (error, response) => {
        if(error)
            return next(error)
        return res.json(response.rows)
    })
})

module.exports = router;