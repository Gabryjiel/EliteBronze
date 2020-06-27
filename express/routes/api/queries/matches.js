exports.getAll =
`SELECT 
    m.id,
    t.name as "Tournament", 
    s.name as "Stage", 
    p.name as "BluePlayer",
    p.rank as "BlueRank",
    p1.name as "RedPlayer",
    p1.rank as "RedRank",
    m.bluecs as "BlueCS",
    m.redcs as "RedCS",
    win.name as "Winner",
    wc.name as "WinCondition",
    m.duration as "Duration"
FROM 
    eb.matches m
JOIN eb.player p ON p.id = m.blueplayerid
JOIN eb.player p1 ON p1.id = m.redplayerid
JOIN eb.player win ON win.id = m.whowon
JOIN eb.tournament t ON t.id = m.tournamentid
JOIN eb.stage s ON s.id = m.stageid
JOIN eb.champion c1 ON c1.id = m.bluechampionid
JOIN eb.champion c2 ON c2.id = m.redchampionid
JOIN eb.wincondition wc ON wc.id = m.wincondition`

exports.getById = 
`SELECT 
    m.id,
    t.name as "Tournament", 
    s.name as "Stage", 
    p.name as "BluePlayer",
    p.rank as "BlueRank",
    p1.name as "RedPlayer",
    p1.rank as "RedRank",
    m.bluecs as "BlueCS",
    m.redcs as "RedCS",
    win.name as "Winner",
    wc.name as "WinCondition",
    m.duration as "Duration"
FROM 
    eb.matches m
JOIN eb.player p ON p.id = m.blueplayerid
JOIN eb.player p1 ON p1.id = m.redplayerid
JOIN eb.player win ON win.id = m.whowon
JOIN eb.tournament t ON t.id = m.tournamentid
JOIN eb.stage s ON s.id = m.stageid
JOIN eb.champion c1 ON c1.id = m.bluechampionid
JOIN eb.champion c2 ON c2.id = m.redchampionid
JOIN eb.wincondition wc ON wc.id = m.wincondition
WHERE 
    m.id = $1;`

exports.getBans =
`SELECT
    c.name
FROM
    eb.matchban mb
JOIN eb.champion c ON mb.championid = c.id
JOIN eb.player p ON mb.playerid = p.id
WHERE
    p.name = $1
    AND mb.matchid = $2`