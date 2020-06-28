exports.getTournaments = `
SELECT 
	t.*,
	p.name as Winner,
	s.name as Stage,
	p1.name as Loser
FROM eb.tournament t
JOIN eb.matches m ON m.tournamentid = t.id
JOIN eb.stage s ON m.stageid = s.id
JOIN eb.player p ON m.whowon = p.id
JOIN eb.player p1 ON (m.blueplayerid = p1.id AND p1.id != m.whowon) OR (m.redplayerid = p1.id AND p1.id != m.whowon)
WHERE s.name = 'Final' OR s.name = '3rd'
ORDER BY t.id, s.name;`

exports.getTournamentsById = `SELECT * FROM eb.tournament WHERE id = $1;`