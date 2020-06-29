const router = require('express').Router();
const db = require('../../db')
const queries = require('./queries/tournaments')
const matchQueries = require('./queries/matches')
const getPodium = require('./functions/getPodium')

router.get('/', async (req, res) => {
    const { rows } = await db.query(queries.getTournaments, [])
    const tournamentsWithStandings = getPodium(rows)
    return res.status(200).json(tournamentsWithStandings)
})

router.get('/:id', async (req, res) => {
   const { rows } = await db.query(matchQueries.getMatchesByTournamentId, [req.params.id])
   return res.status(200).json(rows)
})

module.exports = router;