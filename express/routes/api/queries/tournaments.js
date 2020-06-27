exports.getTournaments = `SELECT * FROM eb.tournament;`

exports.getTournamentsById = `SELECT * FROM eb.tournament WHERE id = $1;`