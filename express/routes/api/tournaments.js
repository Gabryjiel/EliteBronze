const router = require('express').Router();
const db = require('../../db')
const queries = require('./queries/tournaments')

router.get('/', async (req, res) => {
    const { rows } = await db.query(queries.getTournaments, [])
    return res.status(200).json(rows)
})

router.get('/:id', async (req, res) => {
   const all =  (await db.query(queries.getTournamentsById, [req.params.id])).rows[0]
   return res.status(200).json(all)
})

module.exports = router;