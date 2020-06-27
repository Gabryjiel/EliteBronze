const router = require('express-promise-router')();
const db = require('../../db')
const queries = require('./queries/matches')

router.get('/', async (req, res) => {
    const { rows } = await db.query(queries.getAll, [])
    return res.json(rows)
})

router.get('/:id', async (req, res) => {
    const all = (await db.query(queries.getById, [req.params.id])).rows[0]
    const blueBans = (await db.query(queries.getBans, [all.BluePlayer, all.id])).rows.map(el => el.name)
    const redBans = (await db.query(queries.getBans, [all.RedPlayer, all.id])).rows.map(el => el.name)
    delete all.id
    return res.json({...all, blueBans, redBans})
})

module.exports = router;