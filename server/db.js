import mysql from 'mysql'

export const db = mysql.createConnection({
	host: 'localhost',
	user: 'probe',
	password: process.env.DB_KEY,
	database: 'test'
})
