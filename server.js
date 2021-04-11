const express = require('express')
const dbModule = require('mysql')
const bodyParser = require('body-parser')

const port = 3001
const pool = dbModule.createPool({
	connectionLimit: 10,
	host: 'localhost',
	user: 'root',
	password: 'public12is34OK56%%',
	database: 'gal'
})
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// ROUTES

app.get('/api/v1/games', (request, response) => {
	pool.getConnection((error, connection) => {
		if (error) throw error
		connection.query('SELECT * FROM games;', (error, rows) => {
			connection.release()
			if (!error) {
				response.send(rows)
			} else {
				console.log(error)
			}
		})
	})
})

// Kings of War

app.get('/api/v1/kow_armies', (request, response) => {
	pool.getConnection((error, connection) => {
		if (error) throw error
		connection.query('SELECT * FROM kow_armies;', (error, rows) => {
			connection.release()
			if (!error) {
				response.send(rows)
			} else {
				console.log(error)
			}
		})
	})
})

app.get('/api/v1/kow_units', (request, response) => {
	pool.getConnection((error, connection) => {
		if (error) throw error
		connection.query('SELECT * FROM kow_units;', (error, rows) => {
			connection.release()
			if (!error) {
				response.send(rows)
			} else {
				console.log(error)
			}
		})
	})
})

app.get('/api/v1/kow_unit_options', (request, response) => {
	pool.getConnection((error, connection) => {
		if (error) throw error
		connection.query('SELECT * FROM kow_unit_options;', (error, rows) => {
			connection.release()
			if (!error) {
				response.send(rows)
			} else {
				console.log(error)
			}
		})
	})
})

app.get('/api/v1/kow_artifacts', (request, response) => {
	pool.getConnection((error, connection) => {
		if (error) throw error
		connection.query('SELECT * FROM kow_artifacts;', (error, rows) => {
			connection.release()
			if (!error) {
				response.send(rows)
			} else {
				console.log(error)
			}
		})
	})
})

// Warmaster Revolution

app.get('/api/v1/wmr_armies', (request, response) => {
	pool.getConnection((error, connection) => {
		if (error) throw error
		connection.query('SELECT * FROM wmr_armies;', (error, rows) => {
			connection.release()
			if (!error) {
				response.send(rows)
			} else {
				console.log(error)
			}
		})
	})
})

app.get('/api/v1/wmr_units', (request, response) => {
	pool.getConnection((error, connection) => {
		if (error) throw error
		connection.query('SELECT * FROM wmr_units;', (error, rows) => {
			connection.release()
			if (!error) {
				response.send(rows)
			} else {
				console.log(error)
			}
		})
	})
})

app.get('/api/v1/wmr_special_rules', (request, response) => {
	pool.getConnection((error, connection) => {
		if (error) throw error
		connection.query('SELECT * FROM wmr_special_rules;', (error, rows) => {
			connection.release()
			if (!error) {
				response.send(rows)
			} else {
				console.log(error)
			}
		})
	})
})

app.get('/api/v1/wmr_auxiliaries', (request, response) => {
	pool.getConnection((error, connection) => {
		if (error) throw error
		connection.query('SELECT * FROM wmr_auxiliaries;', (error, rows) => {
			connection.release()
			if (!error) {
				response.send(rows)
			} else {
				console.log(error)
			}
		})
	})
})

app.get('/api/v1/wmr_magic_items', (request, response) => {
	pool.getConnection((error, connection) => {
		if (error) throw error
		connection.query('SELECT * FROM wmr_magic_items;', (error, rows) => {
			connection.release()
			if (!error) {
				response.send(rows)
			} else {
				console.log(error)
			}
		})
	})
})

// Log to console if server is running

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})
